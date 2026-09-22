"""Generate the original ECE reel bed and transition hits.

The output is an original synthesis, not a recording or a remix.
Regenerate with: python3 scripts/generate-audio.py
"""

from pathlib import Path

import numpy as np
import wave

SR = 44100
BPM = 120
PHRASE_SECONDS = 16
BEAT = 60.0 / BPM
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "audio"


def write_wav(path: Path, samples: np.ndarray) -> None:
    pcm = np.clip(samples, -1, 1)
    pcm = (pcm * 32767.0).astype(np.int16)
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "wb") as handle:
        handle.setnchannels(1)
        handle.setsampwidth(2)
        handle.setframerate(SR)
        handle.writeframes(pcm.tobytes())
    peak = float(np.max(np.abs(samples)))
    print(f"{path.name}: {len(samples) / SR:.2f}s peak {peak:.3f}")


def exp_env(n: int, decay_s: float) -> np.ndarray:
    return np.exp(-np.arange(n) / (decay_s * SR))


def mix_at(buffer: np.ndarray, start: int, clip: np.ndarray) -> None:
    if start >= len(buffer) or start < 0:
        return
    n = min(len(clip), len(buffer) - start)
    buffer[start : start + n] += clip[:n]


def render_bed(total_samples: int) -> np.ndarray:
    audio = np.zeros(total_samples, dtype=np.float64)
    rng = np.random.default_rng(20260322)
    beat_samples = int(round(BEAT * SR))
    beats = int(total_samples / beat_samples)
    # A minor pentatonic roots, one octave down from a typical lead so this stays a bass bed.
    notes = [55.0, 55.0, 65.41, 55.0, 73.42, 73.42, 82.41, 49.0]

    for beat in range(beats):
        start = beat * beat_samples
        n = min(int(0.2 * SR), total_samples - start)
        tt = np.arange(n) / SR
        freq = 150 * np.exp(-tt * 16) + 46
        phase = 2 * np.pi * np.cumsum(freq) / SR
        kick = np.sin(phase) * exp_env(n, 0.055)
        mix_at(audio, start, 0.95 * kick)

        if beat % 2 == 1:
            cn = min(int(0.09 * SR), total_samples - start)
            noise = rng.standard_normal(cn)
            noise = np.convolve(noise, np.ones(6) / 6, mode="same")
            clap = noise * exp_env(cn, 0.018)
            mix_at(audio, start, 0.34 * clap)

        if beat % 4 == 0:
            crash_n = min(int(0.35 * SR), total_samples - start)
            crash = rng.standard_normal(crash_n)
            crash = np.diff(crash, prepend=crash[0])
            crash = np.convolve(crash, np.ones(3) / 3, mode="same")
            mix_at(audio, start, 0.12 * crash * exp_env(crash_n, 0.08))

    eighth = beat_samples // 2
    eighths = int(total_samples / eighth)
    for step in range(eighths):
        start = step * eighth
        n = min(int(0.035 * SR), total_samples - start)
        hat = rng.standard_normal(n)
        hat = np.diff(hat, prepend=hat[0])
        accent = 0.11 if step % 2 == 0 else 0.055
        mix_at(audio, start, accent * hat * exp_env(n, 0.008))

        if step % 2 == 0:
            freq = notes[(step // 2) % len(notes)]
            bn = min(int(0.24 * SR), total_samples - start)
            tt = np.arange(bn) / SR
            bass = np.sin(2 * np.pi * freq * tt) + 0.28 * np.sin(2 * np.pi * freq * 2 * tt)
            duck = 1 - 0.65 * np.exp(-tt / 0.04)
            mix_at(audio, start, 0.34 * bass * exp_env(bn, 0.12) * duck)

    stab_notes = [220.0, 261.63, 329.63, 196.0]
    bar = beat_samples * 4
    bars = int(total_samples / bar)
    for index in range(bars):
        start = index * bar + beat_samples + eighth
        n = min(int(0.16 * SR), total_samples - start)
        tt = np.arange(n) / SR
        freq = stab_notes[index % len(stab_notes)]
        stab = np.sin(2 * np.pi * freq * tt) * exp_env(n, 0.045)
        mix_at(audio, start, 0.08 * stab)

    audio = np.tanh(audio * 1.35)
    peak = np.max(np.abs(audio))
    if peak > 0:
        audio *= 0.82 / peak
    return audio


def loop_crossfade(overflow: np.ndarray, phrase_samples: int, cross: int) -> np.ndarray:
    audio = overflow[:phrase_samples].copy()
    tail = overflow[phrase_samples : phrase_samples + cross]
    ramp = np.linspace(0, 1, cross)
    audio[:cross] = audio[:cross] * ramp + tail * (1 - ramp)
    return audio


def glitch_hit() -> np.ndarray:
    rng = np.random.default_rng(11)
    n = int(0.22 * SR)
    noise = rng.standard_normal(n)
    noise = np.diff(noise, prepend=0)
    ticks = np.zeros(n)
    for at in (0, int(0.03 * SR), int(0.055 * SR)):
        burst = min(int(0.012 * SR), n - at)
        ticks[at : at + burst] += rng.standard_normal(burst)
    env = exp_env(n, 0.045)
    hit = (0.85 * noise + 0.9 * ticks) * env
    # Quantize for a harsher static edge.
    steps = 28
    hit = np.round(hit * steps) / steps
    peak = np.max(np.abs(hit))
    return hit / peak * 0.78 if peak else hit


def vcr_whoosh() -> np.ndarray:
    rng = np.random.default_rng(19)
    n = int(0.48 * SR)
    tt = np.arange(n) / SR
    freq = np.linspace(920, 180, n)
    flutter = 1 + 0.04 * np.sin(2 * np.pi * 18 * tt)
    tone = np.sin(2 * np.pi * np.cumsum(freq * flutter) / SR)
    noise = rng.standard_normal(n)
    noise = np.convolve(noise, np.ones(4) / 4, mode="same")
    env = np.sin(np.linspace(0, np.pi, n)) ** 1.3
    whoosh = (0.55 * tone + 0.35 * noise) * env
    peak = np.max(np.abs(whoosh))
    return whoosh / peak * 0.7 if peak else whoosh


def main() -> None:
    phrase = int(PHRASE_SECONDS * SR)
    cross = int(0.008 * SR)
    bed = loop_crossfade(render_bed(phrase + cross), phrase, cross)
    write_wav(OUT / "ece-reel-bed.wav", bed)
    write_wav(OUT / "glitch-static.wav", glitch_hit())
    write_wav(OUT / "vcr-rewind.wav", vcr_whoosh())


if __name__ == "__main__":
    main()
