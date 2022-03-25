import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components'

const Welcome = () => {

  return (
    <View style={styles.container}>
      <Header text='IBN Cifras' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#383838'
  },
})

export default Welcome
