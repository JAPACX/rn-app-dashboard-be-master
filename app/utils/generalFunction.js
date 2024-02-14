import { Platform, PixelRatio, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const guidelineBaseWidth = 320;

// based on iphone 5s's scale
const scaleSize = width / guidelineBaseWidth;

const scale = (size) => {
  const newSize = size * scaleSize;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export { scale};
