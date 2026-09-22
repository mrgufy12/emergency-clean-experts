import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {CAPTION_YELLOW, FONT_FAMILY} from "../constants";

export const PopCaption: React.FC<{
  text: string;
  highlightWord?: string;
  durationInFrames: number;
}> = ({text, highlightWord, durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({
    frame,
    fps,
    config: {damping: 10, stiffness: 240, mass: 0.48},
  });
  const scale = interpolate(pop, [0, 1], [0.42, 1]);
  const lift = interpolate(pop, [0, 1], [48, 0]);
  const fadeInEnd = Math.min(3, Math.max(1, durationInFrames - 2));
  const fadeOutStart = Math.max(fadeInEnd + 1, durationInFrames - 4);
  const opacity = interpolate(
    frame,
    [0, fadeInEnd, fadeOutStart, Math.max(fadeOutStart + 1, durationInFrames)],
    [0, 1, 1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const fontSize = captionFontSize(text);
  const stroke = Math.max(12, Math.round(fontSize * 0.13));

  return (
    <AbsoluteFill style={{pointerEvents: "none"}}>
      <div
        style={{
          position: "absolute",
          left: 36,
          right: 36,
          top: "64%",
          transform: `translateY(calc(-50% + ${lift}px)) scale(${scale})`,
          transformOrigin: "center center",
          opacity,
          textAlign: "center",
          fontFamily: FONT_FAMILY,
          fontSize,
          lineHeight: 0.92,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
          color: "#fff",
          WebkitTextStroke: `${stroke}px #000`,
          paintOrder: "stroke fill",
          textShadow: "0 8px 0 #000, 0 16px 22px rgba(0,0,0,0.55)",
        }}
      >
        <CaptionWords text={text} highlightWord={highlightWord} />
      </div>
    </AbsoluteFill>
  );
};

const CaptionWords: React.FC<{text: string; highlightWord?: string}> = ({
  text,
  highlightWord,
}) => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const target = normalizeToken(highlightWord ?? "");
  return (
    <>
      {words.map((word, index) => {
        const hot = target.length > 0 && normalizeToken(word) === target;
        return (
          <span key={`${word}-${index}`} style={{color: hot ? CAPTION_YELLOW : "#FFFFFF"}}>
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </>
  );
};

function captionFontSize(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const longest = Math.max(...words.map((word) => word.length), 1);
  const fitted = Math.floor(980 / (longest * 0.62));
  const byCount = words.length >= 3 || text.trim().length > 18 ? 108 : words.length === 2 ? 132 : 168;
  return Math.max(84, Math.min(byCount, fitted));
}

function normalizeToken(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9']/g, "");
}
