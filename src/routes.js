import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './views/Welcome'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Welcome'} screenOptions={{ headerShown: false }}>
      {/* Main Screens */}
      <Stack.Screen name='Welcome' component={Welcome} />

    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
