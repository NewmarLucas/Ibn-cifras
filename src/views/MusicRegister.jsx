import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text, TextInput } from 'react-native'
import { Header, ListItem, RoundButton } from '../components'

const MusicRegister = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    cantor: '',
    tom: 'A',
  })

  return (
    <View style={styles.container}>
      <Header text='Cadastro' showBackButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838',
  },
})

export default MusicRegister
