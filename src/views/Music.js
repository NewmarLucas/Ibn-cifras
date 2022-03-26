import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from '../components'

const Music = ({ route }) => {
  const { musicName } = route.params

  return (
    <View style={styles.container}>
      <Header text={musicName} showBackButton />

      <View style={styles.pdf}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838'
  },
  textLabel: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'InterLight',
    fontSize: 16,
    color: '#fff'
  },
  pdf: {
    marginTop: '5%',
    width: '90%',
    height: '70%',
    backgroundColor: '#fff'
  }
})

export default Music
