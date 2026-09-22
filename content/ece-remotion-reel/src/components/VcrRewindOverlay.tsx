import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from "remotion";

export const VcrRewindOverlay: React.FC<{
  durationInFrames: number;
}> = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {height} = useVideoConfig();
  const fadeInEnd = Math.min(3, Math.max(1, durationInFrames - 2));
  const fadeOutStart = Math.max(fadeInEnd + 1, durationInFrames - 6);
  const opacity = interpolate(
    frame,
    [0, fadeInEnd, fadeOutStart, Math.max(fadeOutStart + 1, durationInFrames)],
    [0, 1, 1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const tracking = height - ((frame * 160) % (height + 220));
  const secondary = height - ((frame * 230 + 400) % (height + 180));

  return (
    <AbsoluteFill style={{opacity, pointerEvents: "none"}}>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(40,0,30,0.2) 50%, rgba(0,0,0,0.35))",
          mixBlendMode: "multiply",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 3px, transparent 3px, transparent 7px)",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: tracking,
          height: 110,
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.72), rgba(80,255,255,0.45), transparent)",
          mixBlendMode: "screen",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: secondary,
          height: 36,
          background: "rgba(255,40,120,0.55)",
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: 64,
        }}
      >
        <div
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
            color: "#fff",
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: 8,
            textShadow: "2px 0 0 #f04, -2px 0 0 #0ff",
            opacity: frame % 3 === 0 ? 1 : 0.45,
          }}
        >
          REW
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
