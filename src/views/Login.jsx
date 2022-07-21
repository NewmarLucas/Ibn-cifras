import React, { useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View } from 'react-native';
import { ModalContext } from '../providers/modal';
import { Header, RoundButton, TextInputFilled } from '../components';
import api from '../services/api';

const Login = ({ navigation }) => {
  const { setShowModal } = useContext(ModalContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    AsyncStorage.getItem('authToken').then((token) => {
      if (token) {
        navigation.navigate('Admin');
      }
    });
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (form.email === '' || form.password.length < 8) {
      setShowModal({ msg: 'Insira informações válidas para fazer o login' });
      return;
    }

    if (!validateEmail(form.email)) {
      setShowModal({ msg: 'Insira um email válido' });
      return;
    }

    api
      .post('/admin', form)
      .then((res) => {
        if (res?.data?.token) {
          AsyncStorage.setItem('authToken', `${res?.data?.token}`);
          navigation.navigate('Admin');
        }
      })
      .catch((err) => {
        setShowModal({
          msg: 'Os dados informados não são válidos! Tente novamente.',
        });
        throw err;
      });
  };

  return (
    <View style={styles.container}>
      <Header showBackButton text='Login' />

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
  );
};

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
});

export default Login;
