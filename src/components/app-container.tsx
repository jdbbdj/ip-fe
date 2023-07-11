import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import theme from '../theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
type Props = {
  children: React.ReactNode;
};

const AppContainer = (props: Props) => {
  return (
    <GestureHandlerRootView
      style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}
    >
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default AppContainer;
