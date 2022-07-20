import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './views/Welcome'
import List from './views/List'
import ListManager from './views/ListManager'
import AdminMusicList from './views/AdminMusicList'
import Music from './views/Music'
import Login from './views/Login'
import Admin from './views/Admin'
import MusicRegister from './views/MusicRegister'
import EditMusic from './views/EditMusic'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Welcome'} screenOptions={{ headerShown: false }}>
      {/* Main Screens */}
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='ListManager' component={ListManager} />
      <Stack.Screen name='Music' component={Music} />
      <Stack.Screen name='Admin' component={Admin} />
      <Stack.Screen name='MusicRegister' component={MusicRegister} />
      <Stack.Screen name='EditMusic' component={EditMusic} />
      <Stack.Screen name='AdminMusicList' component={AdminMusicList} />

    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
