import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { SvgXml } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { dashbottomON, dashbottomSvgOff, svg2ON, svg2off } from '../assets/svgs';
import { TodoList } from './TodoList';
import { Setting } from './Setting';
import { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { useRef } from 'react';
import AnimatedSlidingComponent from './Animated';

const Tab = createBottomTabNavigator();


const TabArr = [
  { route: 'Dashboard', label: 'Dashboard', type:'home' , component: Dashboard },
  { route: 'List', label: 'List', type: 'list', component: TodoList },
  { route: 'Setting', label: 'Setting', type: 'settings-outline',component: Setting },
];


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
    },    
   }}
   >
  {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    
  </Tab.Navigator> 
  )
}



const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null); 

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0.5 }, 1: {scale: 1.5}});
    } else {
      viewRef.current.animate({0: {scale: 1.5 }, 1: {scale: 1}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Ionicons  name={item.type} color={focused ? '#1253AA' : 'black'} size={25}/>
      </Animatable.View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})