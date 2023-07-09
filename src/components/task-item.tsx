import React, { useCallback } from 'react';
import { Box, useTheme, themeTools, useColorModeValue } from 'native-base';
import { Pressable } from 'react-native';

import AnimatedCheckbox from './animated-checkbox';

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

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  );

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  );

  return (
    <Box width={30} height={30} mr={2}>
      <Pressable onPress={onToggleCheckBox}>
        <AnimatedCheckbox
          highlightColor={highlightColor}
          checkmarkColor={checkmarkColor}
          boxOutlineColor={boxStroke}
          checked={isDone}
        />
      </Pressable>
    </Box>
  );
};

export default TaskItem;
