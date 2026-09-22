import {AbsoluteFill, Audio, Sequence, useVideoConfig} from "remotion";
import {BeatTimeline} from "./components/BeatTimeline";
import {BrandClose} from "./components/BrandClose";
import {PopCaption} from "./components/PopCaption";
import {BRAND_CLOSE_FRAMES, DEFAULT_MUSIC_SRC} from "./constants";
import {normalizeClips, resolveMediaSrc} from "./edit";
import "./load-font";
import type {EcePunchyReelProps} from "./schema";

export const EcePunchyReel: React.FC<EcePunchyReelProps> = ({
  clips,
  captions,
  musicVolume,
  musicSrc,
  sourceVolume = 0,
  showBrandClose = true,
}) => {
  const {durationInFrames} = useVideoConfig();
  const normalized = normalizeClips(clips);
  const bed = musicSrc && musicSrc.trim().length > 0 ? musicSrc.trim() : DEFAULT_MUSIC_SRC;
  const bedVolume = clamp01(musicVolume);
  const cameraVolume = clamp01(sourceVolume);
  const brandFrames = Math.min(BRAND_CLOSE_FRAMES, durationInFrames);

  return (
    <AbsoluteFill style={{backgroundColor: "#000"}}>
      <Audio src={resolveMediaSrc(bed)} volume={bedVolume} loop />
      <BeatTimeline clips={normalized} sourceVolume={cameraVolume} />
      {showBrandClose ? (
        <Sequence
          from={Math.max(0, durationInFrames - brandFrames)}
          durationInFrames={brandFrames}
          name="Brand close"
        >
          <BrandClose />
        </Sequence>
      ) : null}
      {captions.map((caption, index) => (
        <Sequence
          key={`caption-${index}`}
          from={caption.startFrame}
          durationInFrames={caption.durationInFrames}
          name={caption.text}
        >
          <PopCaption
            text={caption.text}
            highlightWord={caption.highlightWord}
            durationInFrames={caption.durationInFrames}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

function clamp01(value: number): number {
  if (Number.isNaN(value)) {
    return 0;
  }
  return Math.min(1, Math.max(0, value));
}
