import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Header, TextInputFilled, RoundButton } from '../components'
import File from '../assets/pictures/file.png'

const EditMusic = ({ navigation, route }) => {
  const { musicName } = route.params
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
      <Header text={musicName} showBackButton />

      <ScrollView style={styles.scroll}>
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

        <View style={{ alignItems: 'center' }}>
          <Image source={File} alt='Arquivo' style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Feather name='paperclip' size={20} color='#fff' />
            <Text style={styles.button_text}>Anexar</Text>
          </TouchableOpacity>
        </View>

        <RoundButton text='Editar' action={() => {}} />
        <View style={styles.buttonContainer}>
          <RoundButton text='Excluir' isDeleteButton action={() => {}} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838',
  },
  scroll: {
    margin: 10,
  },
  inputContainer: {
    width: '100%',
  },
  col2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'cover',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 15,
  },
  button_text: {
    color: '#fff',
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    marginTop: 25,
    marginBottom: 40,
    backgroundColor: '#19A0CB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
})

export default EditMusic
