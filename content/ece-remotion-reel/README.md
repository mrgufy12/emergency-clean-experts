# ECE punchy Reel (Remotion)

Vertical, music-first Reel template for Emergency Clean Experts. The composition is `EcePunchyReel`: 1080×1920, 30 fps. The demo edit is 24 seconds of colored placeholders, beat cuts, glitch and VCR transitions, pop captions, and a brand close. Swap in real job clips when you have them.

Standards live in [`../ece-reel-playbook/PLAYBOOK.md`](../ece-reel-playbook/PLAYBOOK.md).

Render on your machine with the Remotion CLI. You do not need a Remotion Cloud account.

## Setup

From this folder:

```bash
npm install
```

Preview:

```bash
npm run dev
```

That opens Remotion Studio. Pick **EcePunchyReel**.

## Render

```bash
npm run render
```

Which is:

```bash
npx remotion render src/index.ts EcePunchyReel out/ece-punchy-reel.mp4
```

The MP4 is written to `out/` and is gitignored. Chrome for the render is downloaded by Remotion on first use.

Override props from a JSON file when you do not want to edit the demo:

```bash
npx remotion render src/index.ts EcePunchyReel out/ece-punchy-reel.mp4 --props=props.json
```

## Add footage

1. Put MP4s in `public/footage/`. Example: `public/footage/01-pressure-wash.mp4`.
2. Open `src/demoProps.ts`.
3. Set `src` to a path relative to `public/`, or a full `https://` URL.

```ts
{ src: "footage/01-pressure-wash.mp4", durationInFrames: 60, enter: "glitch" }
```

`clips` also accepts plain strings. A string uses one bar (60 frames) and rotates the transition:

```ts
clips: ["footage/01-pressure-wash.mp4", "footage/02-extract.mp4"]
```

Leave `src` as `""` to keep a placeholder card. Placeholder colors are only for the demo and for missing shots.

Keep `durationInFrames` a multiple of 15 so the cut stays on a beat at 120 BPM / 30 fps. The demo uses 60 (one bar, two seconds).

`sourceVolume` defaults to `0` (camera audio muted). Use a small value such as `0.15` only when you want ducked room tone.

## Captions

Edit the `captions` array. One to three words.

```ts
{ text: "PREP TIME", highlightWord: "TIME", startFrame: 60, durationInFrames: 48 }
```

`highlightWord` is the yellow word. The rest is white. Both get the heavy black outline. Type sits lower-middle and springs in on `startFrame`.

## Music

`musicVolume` is a linear gain from 0 to 1. The demo uses `0.8`.

`musicSrc` defaults to `audio/ece-reel-bed.wav`. The composition loops that 16-second bed for the whole Reel.

The bed, the glitch static, and the VCR whoosh are original synthesis, dedicated CC0 for commercial use. Read `public/audio/LICENSE.md` before you replace them. Do not commit a commercial song or a soundtrack copied from a reference edit.

Regenerate the same files (NumPy):

```bash
python3 scripts/generate-audio.py
```

## What is in the composition

| Piece | Role |
| --- | --- |
| `GradedClip` | Clip or placeholder, hotter contrast and saturation, optional motion-blur cut. Camera audio follows `sourceVolume`. |
| `GlitchTransition` | Short RGB split, slice noise, and a white flash. Paired with `glitch-static.wav`. |
| `VcrRewindOverlay` | Tracking bars, scanlines, REW tag, dissolve. Paired with `vcr-rewind.wav`. |
| `PopCaption` | Spring pop, white plus yellow, black stroke, lower-middle. |
| `BeatTimeline` | Lays clips, transitions, and transition hits on the frame grid. |

`enter` on a clip is `cut`, `glitch`, `hard`, or `vcr`. The first clip should usually be `cut`.

`showBrandClose` (default true) covers the last 2.5 seconds with the logo, name, and public hotline. The hotline string is in `src/components/BrandClose.tsx`.

Captions use [Anton](https://fonts.google.com/specimen/Anton), shipped in `public/fonts/` under the SIL Open Font License (`public/fonts/OFL.txt`).

## Props

`EcePunchyReel` takes:

- `clips`: file paths, public URLs, or `{src?, durationInFrames?, enter?, placeholderColor?, placeholderLabel?}`
- `captions`: `{text, highlightWord?, startFrame, durationInFrames}`
- `musicVolume`: number from 0 to 1
- `musicSrc`: optional public path or URL
- `sourceVolume`: optional camera gain, default 0
- `showBrandClose`: optional, default true

Duration follows the sum of the clip lengths.
