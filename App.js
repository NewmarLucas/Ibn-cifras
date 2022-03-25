import React from 'react'
import Routes from './src/routes'
import 'react-native-gesture-handler'
import { useFonts } from 'expo-font'

import SafeAreaView from 'react-native-safe-area-view'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [loaded] = useFonts({
    'InterBold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'InterLight': require('./src/assets/fonts/Inter-Light.ttf'),
    'InterMedium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'InterSemiBold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
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