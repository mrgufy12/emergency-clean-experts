import {staticFile} from "remotion";
import {DEFAULT_CLIP_FRAMES, FPS} from "./constants";
import type {ClipSpec, TransitionEnter} from "./schema";

export type NormalizedClip = {
  src?: string;
  durationInFrames: number;
  enter: TransitionEnter;
  placeholderColor?: string;
  placeholderLabel?: string;
};

const ENTER_ROTATION: TransitionEnter[] = [
  "cut",
  "glitch",
  "hard",
  "glitch",
  "hard",
  "vcr",
];

export function resolveMediaSrc(src: string): string {
  if (/^https?:\/\//i.test(src)) {
    return src;
  }
  return staticFile(src.replace(/^\//, ""));
}

export function normalizeClips(clips: Array<string | ClipSpec>): NormalizedClip[] {
  return clips.map((clip, index) => {
    const fallbackEnter = ENTER_ROTATION[index % ENTER_ROTATION.length] ?? "cut";
    if (typeof clip === "string") {
      const src = clip.trim();
      return {
        src: src.length > 0 ? src : undefined,
        durationInFrames: DEFAULT_CLIP_FRAMES,
        enter: index === 0 ? "cut" : fallbackEnter,
      };
    }

    const src = clip.src?.trim() ?? "";
    return {
      src: src.length > 0 ? src : undefined,
      durationInFrames: clip.durationInFrames ?? DEFAULT_CLIP_FRAMES,
      enter: clip.enter ?? (index === 0 ? "cut" : fallbackEnter),
      placeholderColor: clip.placeholderColor,
      placeholderLabel: clip.placeholderLabel,
    };
  });
}

export function reelDurationInFrames(clips: Array<string | ClipSpec>): number {
  const total = normalizeClips(clips).reduce((sum, clip) => sum + clip.durationInFrames, 0);
  return Math.max(total, FPS);
}
