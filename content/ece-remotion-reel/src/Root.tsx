import {Composition} from "remotion";
import {demoProps} from "./demoProps";
import {EcePunchyReel} from "./EcePunchyReel";
import {reelDurationInFrames} from "./edit";
import {FPS, HEIGHT, WIDTH} from "./constants";
import {ecePunchyReelSchema} from "./schema";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EcePunchyReel"
        component={EcePunchyReel}
        schema={ecePunchyReelSchema}
        durationInFrames={reelDurationInFrames(demoProps.clips)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={demoProps}
        calculateMetadata={({props}) => {
          return {
            durationInFrames: reelDurationInFrames(props.clips),
          };
        }}
      />
    </>
  );
};
