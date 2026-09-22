import {loadFont} from "@remotion/fonts";
import {staticFile} from "remotion";

void loadFont({
  family: "Anton",
  url: staticFile("fonts/Anton-Regular.ttf"),
  weight: "400",
  format: "truetype",
});
