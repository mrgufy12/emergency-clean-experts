import {AbsoluteFill, OffthreadVideo, interpolate, useCurrentFrame} from "remotion";
import {HARD_BLUR_FRAMES} from "../constants";
import {resolveMediaSrc} from "../edit";

export const GradedClip: React.FC<{
  src?: string;
  placeholderColor?: string;
  placeholderLabel?: string;
  motionBlur?: boolean;
  blurDirection?: 1 | -1;
  sourceVolume: number;
}> = ({
  src,
  placeholderColor = "#123c38",
  placeholderLabel,
  motionBlur = false,
  blurDirection = 1,
  sourceVolume,
}) => {
  const frame = useCurrentFrame();
  const blur = motionBlur
    ? interpolate(frame, [0, HARD_BLUR_FRAMES], [18, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;
  const punch = motionBlur
    ? interpolate(frame, [0, HARD_BLUR_FRAMES], [1.14, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;
  const shift = motionBlur
    ? interpolate(frame, [0, HARD_BLUR_FRAMES], [56 * blurDirection, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  const gradeFilter = [
    "contrast(1.24)",
    "saturate(1.48)",
    "brightness(1.04)",
    blur > 0.2 ? `blur(${blur}px)` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <AbsoluteFill style={{backgroundColor: "#000", overflow: "hidden"}}>
      <AbsoluteFill
        style={{
          filter: gradeFilter,
          transform: `translate3d(${shift}px, 0, 0) scale(${punch})`,
        }}
      >
        {src ? (
          <OffthreadVideo
            src={resolveMediaSrc(src)}
            volume={sourceVolume}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
        ) : (
          <Placeholder color={placeholderColor} label={placeholderLabel} />
        )}
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(165deg, rgba(255,186,70,0.18), transparent 38%, rgba(0,30,40,0.22))",
          mixBlendMode: "soft-light",
          pointerEvents: "none",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.42) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

const Placeholder: React.FC<{color: string; label?: string}> = ({color, label}) => {
  const frame = useCurrentFrame();
  const slide = (frame * 14) % 220;
  const zoom = 1.08 + frame * 0.0011;

  return (
    <AbsoluteFill style={{backgroundColor: color, overflow: "hidden"}}>
      <AbsoluteFill
        style={{
          transform: `scale(${zoom}) translate3d(${-slide}px, ${slide * 0.35}px, 0)`,
          backgroundImage:
            "repeating-linear-gradient(112deg, transparent 0 28px, rgba(255,255,255,0.16) 28px 34px, transparent 34px 86px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-10%",
          width: "70%",
          top: `${28 + Math.sin(frame / 9) * 6}%`,
          height: 280,
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.42), rgba(180,240,255,0.05) 55%, transparent 72%)",
          filter: "blur(6px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-8%",
          width: "54%",
          top: `${48 + Math.cos(frame / 11) * 5}%`,
          height: 180,
          background:
            "linear-gradient(90deg, transparent, rgba(255,229,0,0.28), transparent)",
          filter: "blur(10px)",
          transform: "rotate(-8deg)",
        }}
      />
      {label ? (
        <div
          style={{
            position: "absolute",
            top: 88,
            left: 56,
            color: "rgba(255,255,255,0.78)",
            fontFamily: "Anton, Impact, sans-serif",
            fontSize: 40,
            letterSpacing: 3,
            textShadow: "0 2px 0 rgba(0,0,0,0.6)",
          }}
        >
          {label}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
