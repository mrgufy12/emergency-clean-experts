# ECE Reel Playbook

Short vertical Reels cut from real job footage: pressure washing, extraction, drying, detail, and the after. The quality bar is a punchy music-first edit. Picture hits the beat, the grade runs hotter than the camera file, transitions punch, and captions pop in a few words.

Use this when you are cutting a new Reel. The Remotion project in `content/ece-remotion-reel` is the tool. A CapCut (or similar) export can be a taste reference. It is not the production path, and its audio is not our audio.

## Format

- Length: 20–30 seconds.
- Frame: 1080×1920 at 30 fps. Use 1080×1440 only when a placement requires it.
- Footage: process shots. Keep faces, addresses, documents, and client details out unless we have permission to show them.

## Music comes first

Cut to the track. Do not lay music under a picture edit and hope it fits.

- Mute camera audio, or duck it just enough to keep a little room tone. The bed leads.
- Default grid: 120 BPM at 30 fps, one beat every 15 frames. Keep each clip a multiple of 15 frames so the cut lands on a beat. The demo holds each shot for one bar (60 frames, 2 seconds).
- The checked-in bed is `content/ece-remotion-reel/public/audio/ece-reel-bed.wav`. It is a 16-second original loop. The composition loops it for the full Reel.

## Cleared music only

Commercial social posts need a track we can actually use.

- Prefer the checked-in bed. It is original synthesis, dedicated under CC0, and cleared for commercial use. The note is `content/ece-remotion-reel/public/audio/LICENSE.md`.
- You may swap in another track only when you have written clearance for commercial social use. Put that license note in `public/audio/` next to the file and point `musicSrc` at it.
- Do not use a reference edit's soundtrack, a commercial song, a trending sound you do not have rights to, or anything marked personal-use only.
- Do not add CapCut, a music store, or any unofficial downloader as a project dependency. There is no API step in this workflow.

## Picture

- Grade hotter than the raw file: more contrast, more saturation, a light vignette. `GradedClip` does this so every clip matches.
- Transitions, used so they stay special:
  - RGB / chromatic glitch plus a static hit
  - Optional VCR rewind overlay that dissolves out
  - Hard cut with a short motion blur
- A plain cut is fine. Not every join needs an effect.

## Captions

Match the punchy on-screen type from the reference edits.

- One to three words. Name the step (`PREP TIME`, `SECOND PASS`, `FINAL TOUCH`). Not a sentence.
- Bold condensed type. White fill, one yellow keyword, heavy black outline.
- Lower-middle of the frame, clear of the bottom interface.
- Pop on with a spring, on the cut. `PopCaption` does this from the `captions` prop.

Each caption beat is `{text, highlightWord?, startFrame, durationInFrames}`.

## Close

The last beats can land on the brand instead of a leftover frame: logo, name, and the public hotline. Turn that on with `showBrandClose`. Leave it off when the last shot should stay on the work.

## Tooling

Build the Reel in Remotion (`content/ece-remotion-reel`).

- Preview with `npm run dev`.
- Render with `npm run render`, which runs `npx remotion render` on your machine.
- A Remotion Cloud account is not required.
- Swap footage by dropping MP4s in `public/footage/` and editing `src/demoProps.ts`. The template README has the commands.

## Checklist before you post

- The music file is the CC0 bed, or another track with a license note in `public/audio/`
- Camera audio is muted or ducked
- Cuts sit on beats (clip lengths are multiples of 15 frames)
- Captions are 1–3 words, white plus one yellow word, black outline, lower-middle, and they pop
- The grade looks hotter than the raw clip
- Brand close is on if this Reel should end on the company
- No client addresses, documents, or identifiable people without permission
- The file is about 20–30 seconds at 1080×1920 and 30 fps
