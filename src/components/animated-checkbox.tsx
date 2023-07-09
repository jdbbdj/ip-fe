import React, { useEffect, memo } from 'react';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor
} from 'react-native-reanimated';
import Svg, { Path, Defs, ClipPath, G, Rect } from 'react-native-svg';

import AnimatedStroke from './animated-stroke';

const MARGIN = 15;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;

const checkmarkPath = 'M15 12.3198 L 15 25 C 40 15 50 0 60 4';

const boxPath =
  'M1.5 25V16C1.5 7.71573 8.21573 1 16.5 1H26.5C34.7843 1 41.5 7.71573 41.5 16V25C41.5 33.2843 34.7843 40 26.5 40H16.5C8.21573 40 1.5 33.2843 1.5 25Z';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  checked?: boolean;
  highlightColor: string;
  checkmarkColor: string;
  boxOutlineColor: string;
}

const AnimatedCheckbox = (props: Props) => {
  const { checked, highlightColor, checkmarkColor, boxOutlineColor } = props;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: checked ? 500 : 200,
      easing: Easing.linear
    });
  }, [checked]);

  const animatedBoxProps = useAnimatedProps(
    () => ({
      //tsignore
      stroke: interpolateColor(
        Easing.bezierFn(0.16, 1, 0.3, 1)(progress.value),
        [0, 1],
        [boxOutlineColor, highlightColor],
        'RGB'
      ),
      fill: interpolateColor(
        Easing.bezierFn(0.16, 1, 0.3, 1)(progress.value),
        [0, 1],
        ['#00000000', highlightColor],
        'RGB'
      )
    }),
    [highlightColor, boxOutlineColor]
  );

  return (
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
    >
      <AnimatedPath
        d={boxPath}
        strokeWidth={7}
        strokeLinejoin="round"
        strokeLinecap="round"
        animatedProps={animatedBoxProps}
      />

      <AnimatedStroke
        progress={progress}
        d={checkmarkPath}
        stroke={checkmarkColor}
        strokeWidth={6}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeOpacity={checked || false ? 1 : 0}
      />
    </Svg>
  );
};

export default AnimatedCheckbox;
