import React, { useEffect, memo } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor
} from "react-native-reanimated";
import Svg, { Path, Defs, ClipPath, G, Rect } from "react-native-svg";

const MARGIN = 10;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;

const AnimatedCheckbox = () => {
  return (
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(" ")}
    >
      <Path
        d="M1.5 25V16C1.5 7.71573 8.21573 1 16.5 1H26.5C34.7843 1 41.5 7.71573 41.5 16V25C41.5 33.2843 34.7843 40 26.5 40H16.5C8.21573 40 1.5 33.2843 1.5 25Z"
        stroke="black"
        stroke-width="2"
      />
      <Path
        d="M15 12.3198 L 15 21 C 34 10 42 -3 50 2.6753"
        stroke="black"
        stroke-width="3"
      />
    </Svg>
  );
};

export default AnimatedCheckbox;
