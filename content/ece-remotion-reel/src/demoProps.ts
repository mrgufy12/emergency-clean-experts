import {DEFAULT_CLIP_FRAMES, DEFAULT_MUSIC_SRC} from "./constants";
import type {EcePunchyReelProps, TransitionEnter} from "./schema";

type DemoStep = {
  label: string;
  color: string;
  enter: TransitionEnter;
  text: string;
  highlightWord?: string;
};

/**
 * Placeholder edit. Set `src` to a file under public/ (footage/wash.mp4)
 * or an http(s) URL. Leave `src` empty to keep the colored stand-in.
 * Clip lengths are one bar (60 frames) so every cut lands on a beat.
 */
const steps: DemoStep[] = [
  {label: "FOOTAGE 01", color: "#0c3f3c", enter: "cut", text: "ON SITE", highlightWord: "SITE"},
  {label: "FOOTAGE 02", color: "#1b5c48", enter: "glitch", text: "PREP TIME", highlightWord: "TIME"},
  {label: "FOOTAGE 03", color: "#0f4f73", enter: "hard", text: "FIRST CLEAN", highlightWord: "CLEAN"},
  {label: "FOOTAGE 04", color: "#14685a", enter: "glitch", text: "POWER WASH", highlightWord: "WASH"},
  {label: "FOOTAGE 05", color: "#3d5a14", enter: "hard", text: "SECOND PASS", highlightWord: "PASS"},
  {label: "FOOTAGE 06", color: "#5a3d12", enter: "vcr", text: "DETAIL WORK", highlightWord: "DETAIL"},
  {label: "FOOTAGE 07", color: "#0e4a62", enter: "glitch", text: "WATER OUT", highlightWord: "OUT"},
  {label: "FOOTAGE 08", color: "#1a4638", enter: "hard", text: "DRYING NOW", highlightWord: "DRYING"},
  {label: "FOOTAGE 09", color: "#243048", enter: "glitch", text: "FINAL TOUCH", highlightWord: "TOUCH"},
  {label: "FOOTAGE 10", color: "#3a2a4a", enter: "hard", text: "DISINFECT", highlightWord: "DISINFECT"},
  {label: "FOOTAGE 11", color: "#124238", enter: "vcr", text: "LIKE NEW", highlightWord: "NEW"},
  {label: "FOOTAGE 12", color: "#062824", enter: "hard", text: "CALL NOW", highlightWord: "NOW"},
];

export const demoProps: EcePunchyReelProps = {
  clips: steps.map((step) => ({
    src: "",
    durationInFrames: DEFAULT_CLIP_FRAMES,
    enter: step.enter,
    placeholderColor: step.color,
    placeholderLabel: step.label,
  })),
  captions: steps.map((step, index) => ({
    text: step.text,
    ...(step.highlightWord ? {highlightWord: step.highlightWord} : {}),
    startFrame: index * DEFAULT_CLIP_FRAMES,
    durationInFrames: 48,
  })),
  musicSrc: DEFAULT_MUSIC_SRC,
  musicVolume: 0.8,
  sourceVolume: 0,
  showBrandClose: true,
};
