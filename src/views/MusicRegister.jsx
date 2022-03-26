import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Header, TextInputFilled, RoundButton } from '../components'
import File from '../assets/pictures/file.png'

const MusicRegister = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    cantor: '',
    tom: '',
  })

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }))
  }

  return (
    <View style={styles.container}>
      <Header text='Cadastro' showBackButton />

      <View style={styles.inputContainer}>
        <TextInputFilled
          placeholder='Nome'
          value={form.name}
          onChangeText={(text) => {
            handleChange('name', text)
          }}
        />
        <View style={styles.col2}>
          <View style={{ width: '65%' }}>
            <TextInputFilled
              placeholder='Cantor ou versão'
              value={form.cantor}
              onChangeText={(text) => {
                handleChange('cantor', text)
              }}
            />
          </View>
          <View style={{ width: '30%' }}>
            <TextInputFilled
              placeholder='Tom'
              value={form.tom}
              onChangeText={(text) => {
                handleChange('tom', text)
              }}
            />
          </View>
        </View>
      </View>

      <Image source={File} alt='Arquivo' style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onOk && onOk()
          return setOpen(false)
        }}
      >
        <Feather
          name='paperclip'
          style={{ marginRight: 10 }}
          size={20}
          color='#fff'
        />
        <Text style={styles.button_text}>Anexar</Text>
      </TouchableOpacity>

      <View style={{ width: '90%' }}>
        <RoundButton text='Cadastrar' action={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838',
  },
  inputContainer: {
    width: '90%',
  },
  col2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'cover',
    marginTop: 25,
  },
  button_text: {
    color: '#fff',
    fontFamily: 'InterSemiBold',
    fontSize: 16,
  },
  button: {
    marginVertical: 25,
    backgroundColor: '#19A0CB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
})

export default MusicRegister
