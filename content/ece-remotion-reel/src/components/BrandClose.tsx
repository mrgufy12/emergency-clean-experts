import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {FONT_FAMILY} from "../constants";

const HOTLINE = "(786) 906-0355";

export const BrandClose: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({
    frame,
    fps,
    config: {damping: 14, stiffness: 120, mass: 0.7},
  });
  const rise = interpolate(enter, [0, 1], [36, 0]);
  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rule = interpolate(enter, [0, 1], [0, 280]);

  return (
    <AbsoluteFill style={{pointerEvents: "none", opacity}}>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 42%, rgba(3,14,16,0.94) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 250,
          transform: `translateY(${rise}px)`,
        }}
      >
        <Img
          src={staticFile("brand/logo.png")}
          style={{width: 280, height: 280, objectFit: "contain"}}
        />
        <div
          style={{
            marginTop: 12,
            fontFamily: FONT_FAMILY,
            fontSize: 64,
            color: "#fff",
            letterSpacing: 1,
            textAlign: "center",
            lineHeight: 0.95,
            textShadow: "0 4px 0 #000",
            maxWidth: 860,
          }}
        >
          EMERGENCY CLEAN EXPERTS
        </div>
        <div
          style={{
            marginTop: 18,
            width: rule,
            height: 8,
            backgroundColor: "#FFE500",
          }}
        />
        <div
          style={{
            marginTop: 18,
            fontFamily: FONT_FAMILY,
            fontSize: 36,
            color: "#fff",
            letterSpacing: 1,
            textShadow: "0 3px 0 #000",
          }}
        >
          24/7 · {HOTLINE}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
