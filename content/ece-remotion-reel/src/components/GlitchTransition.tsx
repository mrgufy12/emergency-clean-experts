import {useId} from "react";
import {AbsoluteFill, useCurrentFrame} from "remotion";
import {GLITCH_FRAMES} from "../constants";

export const GlitchTransition: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const frame = useCurrentFrame();
  const glitching = frame < GLITCH_FRAMES;
  const filterId = `rgb-glitch-${useId().replace(/:/g, "")}`;
  const redShift = glitching ? Math.round(Math.sin(frame * 13.7) * 34) : 0;
  const blueShift = glitching ? Math.round(Math.cos(frame * 11.2) * -42) : 0;
  const displace = glitching ? 30 + (frame % 3) * 22 : 0;
  const jump = glitching ? ((frame * 53) % 25) - 12 : 0;
  const jitterY = glitching ? (frame % 2 === 0 ? -8 : 10) : 0;

  return (
    <AbsoluteFill style={{overflow: "hidden", backgroundColor: "#000"}}>
      {glitching ? (
        <svg width="0" height="0" style={{position: "absolute"}}>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.62"
              numOctaves="1"
              seed={frame + 3}
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale={displace}
              xChannelSelector="R"
              yChannelSelector="G"
              result="disp"
            />
            <feOffset in="disp" dx={redShift} dy="0" result="rOff" />
            <feColorMatrix
              in="rOff"
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="red"
            />
            <feOffset in="disp" dx={blueShift} dy="2" result="bOff" />
            <feColorMatrix
              in="bOff"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blue"
            />
            <feColorMatrix
              in="disp"
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="green"
            />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" />
          </filter>
        </svg>
      ) : null}
      <AbsoluteFill
        style={{
          filter: glitching ? `url(#${filterId})` : undefined,
          transform: `translate3d(${jump}px, ${jitterY}px, 0)`,
        }}
      >
        {children}
      </AbsoluteFill>
      {glitching ? <GlitchOverlay frame={frame} /> : null}
    </AbsoluteFill>
  );
};

const GlitchOverlay: React.FC<{frame: number}> = ({frame}) => {
  const bars = [0.08, 0.22, 0.41, 0.58, 0.74, 0.9];
  return (
    <AbsoluteFill style={{pointerEvents: "none"}}>
      <AbsoluteFill
        style={{
          opacity: frame === 0 ? 0.72 : 0.08,
          backgroundColor: "#fff",
          mixBlendMode: "screen",
        }}
      />
      {bars.map((base, index) => {
        const travel = (base * 100 + frame * (index % 2 === 0 ? 7 : -9) + index * 13) % 100;
        const red = index % 2 === 0;
        return (
          <div
            key={base}
            style={{
              position: "absolute",
              left: red ? "-4%" : "8%",
              width: "110%",
              top: `${travel}%`,
              height: index % 3 === 0 ? 28 : 14,
              backgroundColor: red ? "rgba(255,30,70,0.8)" : "rgba(40,255,255,0.72)",
              mixBlendMode: "screen",
              transform: `translateX(${red ? 18 : -24}px)`,
            }}
          />
        );
      })}
      <svg width="100%" height="100%" style={{opacity: 0.42, mixBlendMode: "overlay"}}>
        <filter id="glitch-static">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed={frame + 1}
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#glitch-static)" />
      </svg>
    </AbsoluteFill>
  );
};
