import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Alert } from 'react-native'
import { Header, TextInputFilled, RoundButton } from '../components'

const MusicRegister = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    cantor: '',
    musicLink: '',
  })

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }))
  }

  const parseLink = (link) => {
    const splitedLink = link?.split('/')
    const lastIndex = splitedLink.pop()

    if (lastIndex.includes('.html')) {
      const newLink = [...splitedLink, lastIndex.split('.')[0], 'imprimir.html']
      return newLink.join('/')
    } else {
      const lastCharacter = link.split('').pop()
      return lastCharacter === '/'
        ? link + 'imprimir.html'
        : link + '/imprimir.html'
    }
  }

  const handleSubmit = () => {
    if (form.musicLink === '' || form.cantor === '' || form.name === '') {
      return Alert.alert(
        'Alerta',
        'Você precisa preencher todos os campos para cadastrar uma nova música'
      )
    }

    const data = {
      ...form,
      musicLink: parseLink(form.musicLink),
    }

    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Header text='Cadastro' showBackButton />

      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <TextInputFilled
            placeholder='Nome'
            value={form.name}
            onChangeText={(text) => {
              handleChange('name', text)
            }}
          />
          <TextInputFilled
            placeholder='Cantor ou versão'
            value={form.cantor}
            onChangeText={(text) => {
              handleChange('cantor', text)
            }}
          />
          <TextInputFilled
            placeholder='Link do Cifra Club'
            value={form.musicLink}
            onChangeText={(text) => {
              handleChange('musicLink', text)
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <RoundButton text='Cadastrar' action={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#383838',
  },
  scroll: {
    width: '90%',
    margin: 10,
  },
  inputContainer: {
    marginTop: 60,
    height: '80%',
  },
  buttonContainer: {
    width: '90%',
    paddingVertical: 30,
  },
})

export default MusicRegister
