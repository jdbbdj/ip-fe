import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//container
import AppContainer from './src/components/app-container';
//screen
import MainScreen from './src/screens/main-screen';
import Login from './src/screens/login';
export default function App() {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
}
