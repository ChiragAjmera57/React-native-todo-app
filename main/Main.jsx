import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Home } from '../pages/Home'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import StackApp from '../pages/Stack'

export const Main = () => {
  const {store} = useContext(AuthContext)
  const {token} = store
  if(!token){
    return(
      <StackApp />
    )
  }
  return (
    <NavigationContainer>
    <Home />
   </NavigationContainer>
  )
}
