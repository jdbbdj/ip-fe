import React, { useCallback } from 'react';
import {
  Box,
  HStack,
  Text,
  useTheme,
  themeTools,
  useColorModeValue,
  useToken
} from 'native-base';
import { Pressable, StyleSheet } from 'react-native';

import AnimatedCheckbox from './animated-checkbox';
import AnimatedTaskLabel from './animated-task-label';
import GlobalStyles from '../global-styles';
interface Props {
  isDone: boolean;
  onToggleCheckBox: () => void;
}

const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckBox } = props;
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
        AA AA
      </AnimatedTaskLabel>
    </HStack>
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
