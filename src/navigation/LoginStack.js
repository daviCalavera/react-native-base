import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//#region /////// SCREENS ///////
import LoginScreen from '../containers/screens/Login';
import PasswordResetScreen from '../containers/screens/PasswordReset';
//#endregion

import loginStrings from '../containers/screens/Login/strings';

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

  return {
    tabBarLabel: loginStrings.loginTitle,
    tabBarIcon: ({tintColor}) => {
      const iconName = Platform.select({
        ios: 'ios-log-in',
        android: 'md-log-in',
      });
      return <Icon name={iconName} color={tintColor} />;
    },
    tabBarVisible,
  };
};

const LoginStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={stackNavigationOptions}>
    <Stack.Screen component={LoginScreen} name="LoginScreen" />
    <Stack.Screen component={PasswordResetScreen} name="PasswordResetScreen" />
  </Stack.Navigator>
);

export default LoginStack;
