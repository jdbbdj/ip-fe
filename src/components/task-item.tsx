import React, { useState } from 'react';
import {
  Box,
  HStack,
  useTheme,
  themeTools,
  useColorModeValue,
  useToken,
  Text,
  Icon
} from 'native-base';
import { Pressable, StyleSheet } from 'react-native';
import { PanGestureHandlerProps } from 'react-native-gesture-handler';

import AnimatedCheckbox from './animated-checkbox';
import AnimatedTaskLabel from './animated-task-label';
import SwipableView from './swipable-view';

import GlobalStyles from '../global-styles';
import { Feather } from '@expo/vector-icons';

//extended props for panning functionality
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean;
  onToggleCheckBox: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const {
    isDone,
    onToggleCheckBox,
    onPressLabel,
    onRemove,
    subject,
    simultaneousHandlers
  } = props;
  //access themes on theme.ts
  const theme = useTheme();
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  );

  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  );

  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('black', 'white')
  );

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText')
  );

  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600')
  );

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          alignItems="flex-end"
          justifyContent="center"
          px={4}
          bg="red.500"
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack
        style={[styles.taskHStack]}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Box width={45} height={45} mr={2} mt={3}>
          <Pressable onPress={onToggleCheckBox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        <AnimatedTaskLabel
          onPress={onToggleCheckBox}
          strikeThrough={isDone}
          textColor={activeTextColor}
          inactiveTextColor={doneTextColor}
        >
          {subject}
        </AnimatedTaskLabel>
      </HStack>
    </SwipableView>
  );
};

const styles = StyleSheet.create({
  taskHStack: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 1
  }
});

export default TaskItem;
