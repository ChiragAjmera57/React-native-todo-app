import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { SvgXml } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { dashbottomON, dashbottomSvgOff, svg2ON, svg2off } from '../assets/svgs';
import { TodoList } from './TodoList';

const Tab = createBottomTabNavigator();
export const Home = () => {
  return (
    <Tab.Navigator
   screenOptions={{
    headerShown:false,
    tabBarStyle:{
      height:60,
      position:'absolute',
      bottom:10,
      right:10,
      left:10,
      borderRadius:15,
    }
   }}
    >
    <Tab.Screen  name="dashboard" component={Dashboard}
    options={{
      tabBarShowLabel:false,
      tabBarIcon:({focused})=>(
        
          <Ionicons name= {focused?'home':'home-outline'} size={30} color={'black'}  />
      ),
    }}
    />
    <Tab.Screen name="list" component={TodoList}
     options={{
      tabBarIcon:()=>{
        
      }
    }}
    />
    <Tab.Screen name="login2" component={Login}
     options={{
      tabBarIcon:()=>{
        
      }
    }}
    />
    <Tab.Screen name="login3" component={Login}
     options={{
      tabBarIcon:()=>{
        
      }
    }}
    />
  </Tab.Navigator>
  )
}
