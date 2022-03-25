import React from 'react'
import Routes from './src/routes'
import 'react-native-gesture-handler'
import { useFonts } from 'expo-font'

import SafeAreaView from 'react-native-safe-area-view'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [loaded] = useFonts({
    'RobotoLight': require('./src/assets/fonts/Roboto-Light.ttf'),
    'RobotoRegular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'RobotoBold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'RobotoBlack': require('./src/assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}