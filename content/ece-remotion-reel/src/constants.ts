export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

/** 120 BPM at 30 fps. Clip lengths should be multiples of this so cuts land on beats. */
export const BEAT_FRAMES = 15;

/** One bar at 120 BPM. Default hold for a punchy process shot. */
export const DEFAULT_CLIP_FRAMES = BEAT_FRAMES * 4;

export const GLITCH_FRAMES = 8;
export const VCR_FRAMES = 16;
export const HARD_BLUR_FRAMES = 5;
export const BRAND_CLOSE_FRAMES = 75;

export const DEFAULT_MUSIC_SRC = "audio/ece-reel-bed.wav";
export const GLITCH_SFX_SRC = "audio/glitch-static.wav";
export const VCR_SFX_SRC = "audio/vcr-rewind.wav";

export const CAPTION_YELLOW = "#FFE500";
export const FONT_FAMILY = "Anton, Impact, Haettenschweiler, Arial Black, sans-serif";
