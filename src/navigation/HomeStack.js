import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//#region /////// SCREENS ///////
import DemoScreen from '../containers/screens/DemoScreen';
import DetailScreen from '../containers/screens/DetailScreen';
import HomeScreen from '../containers/screens/HomeScreen';
import OptionsScreen from '../containers/screens/OptionsScreen';
//#endregion

import homeStrings from '../containers/screens/HomeScreen/strings';

const Stack = createStackNavigator();
const stackNavigationOptions = ({navigation, route}) => {
  const zeroRouteIndex =
    navigation
      .dangerouslyGetState()
      .routes.findIndex((r) => r.key === route.key) > 0;
  let tabBarVisible = true;

  if (zeroRouteIndex) {
    tabBarVisible = false;
  }
  console.log('HOMESTACK screen props');
  let drawerLockMode = 'unlocked';
  if (zeroRouteIndex) {
    drawerLockMode = 'locked-closed';
  }

  return {
    tabBarLabel: homeStrings.homeTitle,
    tabBarIcon: ({tintColor}) => {debugger; return <Ionicons name="ios-home" color={tintColor} />},
    tabBarVisible,
    drawerLockMode,
    drawerLabel: homeStrings.homeTitle,
    drawerIcon: ({tintColor}) => <Ionicons name="md-home" color={tintColor} />,
  };
};

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={stackNavigationOptions}>
    <Stack.Screen component={DemoScreen} name="DemoScreen" />
    <Stack.Screen component={DetailScreen} name="DetailScreen" />
    <Stack.Screen component={HomeScreen} name="HomeScreen" />
    <Stack.Screen component={OptionsScreen} name="OptionsScreen" />
  </Stack.Navigator>
);

export default HomeStack;
