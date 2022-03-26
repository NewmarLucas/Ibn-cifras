import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Header, RoundButton, Alert, TextInputFilled } from '../components'

const Login = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    if (form.email === '' || form.password.length < 8) {
      setShowAlert(true)
      setAlertMessage('Insira informações válidas para fazer o login')
      return
    }
    if (!validateEmail(form.email)) {
      setShowAlert(true)
      setAlertMessage('Insira um email válido')
      return
    }

    navigation.navigate('Admin')
  }

  return (
    <View style={styles.container}>
      <Header showBackButton text='Login' />
      {showAlert && (
        <Alert buttonText='Ok' msg={alertMessage} setOpen={setShowAlert} />
      )}

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInputFilled
            value={form.email}
            placeholder='Email'
            onChangeText={(text) => handleChange('email', text)}
          />
          <TextInputFilled
            value={form.password}
            secureTextEntry
            placeholder='Senha'
            onChangeText={(text) => handleChange('password', text)}
          />
        </View>
        <RoundButton action={handleSubmit} text='Login' />
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
})

export default Login
