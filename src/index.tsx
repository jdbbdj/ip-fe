import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import MainScreen from './screens/main-screen';
import Travels from './screens/travels';
import AppContainer from './components/app-container';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <AppContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Travels" component={Travels} />
        <Tab.Screen name="Market" component={Login} />
        <Tab.Screen name="Profile" component={Login} />
      </Tab.Navigator>
    </AppContainer>
  );
};

export default MyTabs;
