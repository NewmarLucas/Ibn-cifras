import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'InterSemiBold'
  }
})
