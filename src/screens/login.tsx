import * as React from "react";
import {
  Text,
  Box,
  Center,
  View,
  themeTools,
  useColorMode,
  useColorModeValue
} from "native-base";

export const MainScreen = () => {
  return (
    <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blue.50" }} flex={1}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 400,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: "blue"
        }}
      />
    </Center>
  );
};
