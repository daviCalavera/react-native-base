import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//#region /////// SCREENS ///////
import LoadingScreen from '../containers/screens/Loading';
import SearchScreen from '../containers/screens/Search';
//#endregion

//#region /////// STACKS ///////
import HomeStack from './HomeStack';
import LoginStack from './LoginStack';
import SettingsStack from './SettingsStack';
//#endregion

//#region /////// COMPONENTS ///////
import BurgerMenu from '../components/BurgerMenu';
import TabBarIcon from '../components/TabBarIcon';
//#endregion

const IOS_MODAL_ROUTES = ['OptionsScreen'];

function createDrawerStack() {
  const Drawer = createDrawerNavigator();
  const drawerNavigationOptions = ({navigation, route}) => {
    const notzeroRouteIndex =
      navigation
        .dangerouslyGetState()
        .routes.findIndex((r) => r.key === route.key) > 0;
    let options = {
      headerShown: true
    };

    if (notzeroRouteIndex) {
      options.headerShown = false;
    }
    console.log('DRAWER OPTIONS: ', options);
    return options;
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <BurgerMenu {...props}/>}
      screenOptions={drawerNavigationOptions}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({focused, color, size}) => <TabBarIcon color={color} focused={focused} name="home" size={size} />
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          drawerIcon: ({focused, color, size}) => <TabBarIcon color={color} focused={focused} name="search" size={size} />
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({focused, color, size}) => <TabBarIcon color={color} focused={focused} name="cog" size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}

function createTabStack() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarIcon color={color} focused={focused} name="home" size={size} />
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarIcon color={color} focused={focused} name="search" size={size} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarIcon color={color} focused={focused} name="cog" size={size} />
        }}
      />
    </Tab.Navigator>
  );
}

const PlatformNavigator = Platform.select({
  ios: () => createTabStack(),
  android: () => createDrawerStack(),
});

const RootStack = createStackNavigator();
const rootStackNavigationOptions = {};

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        mode="modal"
        screenOptions={rootStackNavigationOptions}>
        <RootStack.Screen
          name="PlatformNavigator"
          component={PlatformNavigator}
        />
        <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
        <RootStack.Screen name="AuthStack" component={LoginStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
