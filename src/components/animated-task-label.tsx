import React, { memo, useEffect } from 'react';
import { Text, HStack, Box, themeTools } from 'native-base';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  Easing,
  withSequence,
  withTiming,
  withDelay
} from 'react-native-reanimated';

interface Props {
  strikeThrough: boolean;
  textColor: string;
  inactiveTextColor: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

//seperate box container
//declare like styled components
const AnimatedBox = Animated.createAnimatedComponent(Box);

//seperate animated HSTACK
const AnimatedHStack = Animated.createAnimatedComponent(HStack);

//seperate animated text
const AnimatedText = Animated.createAnimatedComponent(Text);

//when dealing with props that don't need rerender
//when the props remain the same we can use memo
//parent rerenders the whole child component
//to avoid this we use memo to save some memory and process
const AnimatedTaskLabel = memo((props: Props) => {
  const { strikeThrough, textColor, inactiveTextColor, onPress, children } =
    props;

  // useRef has been used as listener for components you don't want synchronization of animations
  //useSharedValue is used to achieve synchronization of animations
  const hstackOffset = useSharedValue(0);
  const hstackAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateX: hstackOffset.value }]
    }),
    [strikeThrough]
  );

  const textColorProgress = useSharedValue(0);
  const textColorStyles = useAnimatedStyle(
    () => ({
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor],
        'RGB'
      )
    }),
    [strikeThrough, textColor, inactiveTextColor]
  );

  const strikeTroughWidth = useSharedValue(0);
  const strikeThroughAnimatedStyles = useAnimatedStyle(
    () => ({
      width: `${strikeTroughWidth.value * 100}%`,
      borderBottomColor: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [inactiveTextColor, textColor]
      )
    }),
    [strikeThrough, inactiveTextColor, textColor]
  );

  useEffect(() => {
    const easing = Easing.out(Easing.quad);
    if (strikeThrough) {
      hstackOffset.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing })
      );
      strikeTroughWidth.value = withTiming(1, { duration: 400, easing });
      textColorProgress.value = withDelay(
        1000,
        withTiming(1, { duration: 400, easing })
      );
    } else {
      strikeTroughWidth.value = withTiming(0, { duration: 400, easing });
      textColorProgress.value = withDelay(
        1000,
        withTiming(0, { duration: 400, easing })
      );
    }
  });
  return (
    <Pressable onPress={onPress}>
      <AnimatedHStack alignItems="center" style={[hstackAnimatedStyles]}>
        <AnimatedText
          fontSize={19}
          noOfLines={1}
          isTruncated
          px={1}
          style={[textColorStyles]}
        >
          {children}
        </AnimatedText>
        <AnimatedBox
          position="absolute"
          h={1}
          borderBottomWidth={1}
          style={[strikeThroughAnimatedStyles]}
        />
      </AnimatedHStack>
    </Pressable>
  );
});

export default AnimatedTaskLabel;
