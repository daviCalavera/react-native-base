import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//#region /////// SCREENS ///////
import SettingsScreen from '../containers/screens/SettingsScreen';
//#endregion

import settingsStrings from '../containers/screens/SettingsScreen/strings';

const Stack = createStackNavigator();
const stackNavigationOptions = ({}) => ({
  tabBarLabel: settingsStrings.settingsTitle,
  tabBarIcon: ({tintColor}) => <Ionicons name="ios-cog" color={tintColor} />,
  drawerLabel: settingsStrings.settingsTitle,
  drawerIcon: ({tintColor}) => <Ionicons name="md-cog" color={tintColor} />,
});

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={stackNavigationOptions}>
    <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
  </Stack.Navigator>
);

export default HomeStack;
