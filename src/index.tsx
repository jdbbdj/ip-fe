import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import MainScreen from './screens/main-screen';

import AppContainer from './components/app-container';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <AppContainer>
      <Tab.Navigator initialRouteName="Travels">
        <Tab.Screen name="Expenses" component={Login} />
        <Tab.Screen name="Travels" component={MainScreen} />
        <Tab.Screen name="Market" component={Login} />
        <Tab.Screen name="Profile" component={Login} />
      </Tab.Navigator>
    </AppContainer>
  );
};

export default MyTabs;
