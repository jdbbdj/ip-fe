import React, { useState, useCallback } from 'react';
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useColorMode,
  //for color values first argument for initiated mode
  useColorModeValue
} from 'native-base';

//button
import ThemeToggle from '../components/theme-toggle';
import AnimatedTaskLabel from '../components/animated-task-label';
import BoxShake from '../components/button-shake';
import TaskItem from '../components/task-item';
const MainScreen = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handlePressCheckBox: () => void = useCallback(() => {
    setClicked(prev => !prev);
  }, []);

  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blue.50' }} flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <Box w="100px" h="100px">
          <BoxShake />
        </Box>

        <TaskItem
          onToggleCheckBox={handlePressCheckBox}
          isDone={clicked}
          subject="Task"
        />
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text color={useColorModeValue('white', 'black')}>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
};

export default MainScreen;
