import * as React from "react";
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useColorMode,
  //for color values first argument for initiated mode
  useColorModeValue
} from "native-base";

//button
import ThemeToggle from "../components/theme-toggle";
import AnimatedCheckbox from "../components/animated-checkbox";

const MainScreen = () => {
  return (
    <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blue.50" }} flex={1}>
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <AnimatedCheckbox />
        </Box>
        <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
          <Text color={useColorModeValue("white", "black")}>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
};

export default MainScreen;
