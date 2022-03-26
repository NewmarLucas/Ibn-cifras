import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Header, RoundButton } from '../components'

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }))
  }

  return (
    <View style={styles.container}>
      <Header showBackButton text='Login' />

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            value={form.email}
            style={styles.input}
            placeholder='Email'
            onChangeText={(text) => handleChange('email', text)}
            placeholderTextColor='#999'
          />
          <TextInput
            value={form.password}
            style={styles.input}
            secureTextEntry
            placeholder='Senha'
            onChangeText={(text) => handleChange('password', text)}
            placeholderTextColor='#999'
          />
        </View>
        <RoundButton action={() => {}} text='Login' />
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
  content: {
    width: '90%',
    height: '80%',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: '35%',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})

export default Login
