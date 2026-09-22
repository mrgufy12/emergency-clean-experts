import {AbsoluteFill, Audio, Sequence} from "remotion";
import {GLITCH_FRAMES, GLITCH_SFX_SRC, VCR_FRAMES, VCR_SFX_SRC} from "../constants";
import type {NormalizedClip} from "../edit";
import {resolveMediaSrc} from "../edit";
import {GlitchTransition} from "./GlitchTransition";
import {GradedClip} from "./GradedClip";
import {VcrRewindOverlay} from "./VcrRewindOverlay";

export const BeatTimeline: React.FC<{
  clips: NormalizedClip[];
  sourceVolume: number;
}> = ({clips, sourceVolume}) => {
  const layers: React.ReactNode[] = [];
  let cursor = 0;

  clips.forEach((clip, index) => {
    const from = cursor;
    cursor += clip.durationInFrames;
    const picture = (
      <GradedClip
        src={clip.src}
        placeholderColor={clip.placeholderColor}
        placeholderLabel={clip.placeholderLabel}
        motionBlur={clip.enter === "hard"}
        blurDirection={index % 2 === 0 ? 1 : -1}
        sourceVolume={sourceVolume}
      />
    );

    layers.push(
      <Sequence
        key={`clip-${index}`}
        from={from}
        durationInFrames={clip.durationInFrames}
        name={clip.placeholderLabel ?? clip.src ?? `Clip ${index + 1}`}
      >
        {clip.enter === "glitch" ? <GlitchTransition>{picture}</GlitchTransition> : picture}
        {clip.enter === "vcr" ? (
          <Sequence durationInFrames={VCR_FRAMES}>
            <VcrRewindOverlay durationInFrames={VCR_FRAMES} />
          </Sequence>
        ) : null}
      </Sequence>,
    );

    if (clip.enter === "glitch") {
      layers.push(
        <Sequence
          key={`glitch-sfx-${index}`}
          from={from}
          durationInFrames={GLITCH_FRAMES + 8}
          name={`Glitch hit ${index + 1}`}
        >
          <Audio src={resolveMediaSrc(GLITCH_SFX_SRC)} volume={0.62} />
        </Sequence>,
      );
    }

    if (clip.enter === "vcr") {
      layers.push(
        <Sequence
          key={`vcr-sfx-${index}`}
          from={from}
          durationInFrames={VCR_FRAMES + 10}
          name={`Rewind hit ${index + 1}`}
        >
          <Audio src={resolveMediaSrc(VCR_SFX_SRC)} volume={0.5} />
        </Sequence>,
      );
    }
  });

  return <AbsoluteFill>{layers}</AbsoluteFill>;
};
