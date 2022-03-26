import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './views/Welcome'
import List from './views/List'
import Music from './views/Music'
import Login from './views/Login'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Welcome'} screenOptions={{ headerShown: false }}>
      {/* Main Screens */}
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='Music' component={Music} />

    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
