import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { SvgXml } from 'react-native-svg';
import { dashbottomON, dashbottomSvgOff, svg2ON, svg2off } from '../assets/svgs';

const Tab = createBottomTabNavigator();
export const Home = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'dashboard') {
            iconName = focused ? dashbottomON : dashbottomSvgOff;
          } else if (route.name === 'login') {
            iconName = focused ? svg2ON : svg2off;
          }

          // You can return any component here that you want as the tab icon.
          return <SvgXml xml={iconName}  />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
    <Tab.Screen  name="dashboard" component={Dashboard} />
    <Tab.Screen name="login" component={Login} />
  </Tab.Navigator>
  )
}
