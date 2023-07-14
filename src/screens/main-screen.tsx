import React, { useState, useCallback } from 'react';
import {
  Text,
  Box,
  Center,
  VStack,
  //for color values first argument for initiated mode
  useColorModeValue,
  Fab,
  Icon
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import { demo_data } from '../utils/data';
//button
import ThemeToggle from '../components/theme-toggle';
import BoxShake from '../components/button-shake';
import TaskList from '../components/task-list';
import shortid from 'shortid';

interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

const MainScreen = () => {
  const [data, setData] = useState(demo_data);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  //set the checkbox
  const handleToggleTaskItem = useCallback((item: TaskItemData) => {
    //@ts-ignore
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done
      };
      return newData;
    });
  }, []);

  //handle change in subject/task name
  const handleChangeTaskItemSubject = useCallback(
    (item: TaskItemData, newSubject: string) => {
      //@ts-ignore
      setData(prevData => {
        const newData = [...prevData];
        const index = prevData.indexOf(item);
        newData[index] = {
          ...item,
          subject: newSubject
        };
        return newData;
      });
    },
    []
  );

  //set the editing to false/or falsify the equality of editing id to data.id
  const handleFinishEditingTaskItem = useCallback((_item: TaskItemData) => {
    setEditingItemId(null);
  }, []);

  //set the editing to true/or truthify the equality of editing id to data.id
  const handlePressTaskItemLabel = useCallback((item: TaskItemData) => {
    setEditingItemId(item.id);
  }, []);

  //handle remove in list of selected id/subject/task name
  const handleRemoveItem = useCallback((item: TaskItemData) => {
    //@ts-ignore
    setData(prevData => {
      //removest the whole data of the selected task
      const newData = prevData.filter(i => i !== item);
      return newData;
    });
  }, []);

  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blue.50' }} flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <Box w="100px" h="100px">
          <BoxShake />
        </Box>

        <TaskList
          data={data}
          editingItemId={editingItemId}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
        />
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text color={useColorModeValue('white', 'black')}>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ]);
          setEditingItemId(id);
        }}
      />
    </Center>
  );
};

export default MainScreen;
