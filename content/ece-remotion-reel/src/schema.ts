import {z} from "zod";

export const transitionEnterSchema = z.enum(["glitch", "hard", "vcr", "cut"]);

export const clipSpecSchema = z.object({
  src: z.string().optional(),
  durationInFrames: z.number().int().positive().optional(),
  enter: transitionEnterSchema.optional(),
  placeholderColor: z.string().optional(),
  placeholderLabel: z.string().optional(),
});

export const captionBeatSchema = z.object({
  text: z.string(),
  highlightWord: z.string().optional(),
  startFrame: z.number().int().min(0),
  durationInFrames: z.number().int().positive(),
});

export const ecePunchyReelSchema = z.object({
  clips: z.array(z.union([z.string(), clipSpecSchema])),
  captions: z.array(captionBeatSchema),
  musicVolume: z.number().min(0).max(1),
  musicSrc: z.string().optional(),
  sourceVolume: z.number().min(0).max(1).optional(),
  showBrandClose: z.boolean().optional(),
});

export type TransitionEnter = z.infer<typeof transitionEnterSchema>;
export type ClipSpec = z.infer<typeof clipSpecSchema>;
export type CaptionBeat = z.infer<typeof captionBeatSchema>;
export type EcePunchyReelProps = z.infer<typeof ecePunchyReelSchema>;
