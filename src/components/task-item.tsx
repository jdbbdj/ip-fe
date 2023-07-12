import React, { useCallback, useState } from 'react';
import {
  Box,
  HStack,
  useTheme,
  themeTools,
  useColorModeValue,
  useToken,
  Text,
  Icon,
  Input
} from 'native-base';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInputChangeEventData
} from 'react-native';
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
  //for editing purposes
  isEditing: boolean;
  onChangeSubject?: (subject: string) => void;
  onFinishEditing?: () => void;
}

const TaskItem = (props: Props) => {
  const {
    isDone,
    onToggleCheckBox,
    onPressLabel,
    onRemove,
    subject,
    simultaneousHandlers,
    //editing functionality
    isEditing,
    onChangeSubject,
    onFinishEditing
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
  //@ts-ignore
  const handleChangeSubject: () => void = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
      console.log(e.nativeEvent.text);
    },
    [onChangeSubject]
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
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            onPress={onPressLabel}
            strikeThrough={isDone}
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
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
