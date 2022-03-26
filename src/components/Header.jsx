import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

export const Header = ({ text, showLogin = false, showBackButton = false }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {showLogin && (
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
      {showBackButton && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={styles.backButton}
        >
          <Feather name='chevron-left' size={35} color='#fff' />
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
    width: '70%',
    textAlign: 'center',
    fontFamily: 'InterSemiBold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 25,
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
