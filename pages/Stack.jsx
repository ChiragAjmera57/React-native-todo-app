import React, { useContext } from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import { Home } from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
import { Main } from '../main/Main';

const Stack = createNativeStackNavigator();

const StackApp = () => {
  const {store} = useContext(AuthContext)
  const {token} = store
  if(token){
    return(
      <Main />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup"
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name="Signup" component={Signup} options={{
            // Use this to prevent going back to the login screen
            gestureEnabled: false,
          }} /> 
        <Stack.Screen name="Login" component={Login} options={{
            // Use this to prevent going back to the login screen
            gestureEnabled: false,
          }} />
        <Stack.Screen name="Home" component={Home} options={{
            // Use this to prevent going back to the login screen
            gestureEnabled: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;