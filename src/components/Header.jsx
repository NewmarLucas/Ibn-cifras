import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

export const Header = ({ text, showLogin = false }) => {
  return (
    <View style={styles.container}>
      {showLogin && (
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 115,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: Constants.statusBarHeight,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'InterSemiBold',
  },
  loginButton: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'InterMedium',
  },
})
