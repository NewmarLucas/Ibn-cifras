import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Welcome = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.versionText}>Versão: 0.0.1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#555'
  },
  internal: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.25
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  versionText: {
    fontSize: 14,
    color: 'white'
  }
})

export default Welcome
