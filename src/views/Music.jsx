import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from '../components'
import PDFReader from 'rn-pdf-reader-js'

const Music = ({ route }) => {
  const { musicName } = route.params

  return (
    <View style={styles.container}>
      <Header text={musicName} showBackButton />

      <View style={styles.pdf}>
        <PDFReader
          source={{ uri: 'https://storage.googleapis.com/sim-mobi.appspot.com/driverPersonalAttachments/61f9abfa5006d9001d8eacbd/criminalRecord1643752609429.criminalRecord' }}
          style={styles.thumbnail}
        />
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
  pdf: {
    marginTop: 5,
    width: '95%',
    height: '70%',
    backgroundColor: '#fff'
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  }
})

export default Music
