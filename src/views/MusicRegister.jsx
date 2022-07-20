import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import api from '../services/api';
import { ModalContext } from '../providers/modal';
import { Header, TextInputFilled, RoundButton } from '../components';
import { parseLink, getAuthToken } from '../helpers/utils';

const initialState = {
  name: '',
  singer: '',
  url: '',
};
const MusicRegister = () => {
  const { setShowModal } = useContext(ModalContext);
  const [form, setForm] = useState(initialState);

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (form.url === '' || form.singer === '' || form.name === '') {
      return setShowModal({
        msg: 'Você precisa preencher todos os campos para cadastrar uma nova música',
      });
    }

    const data = {
      ...form,
      url: parseLink(form.url),
    };

    api
      .post('/admin/music', data, await getAuthToken())
      .then((res) => {
        if (res?.data === 'Created') {
          setShowModal({ msg: 'Música cadastrada com sucesso' });
          setForm(initialState);
          return;
        }
        setShowModal({
          msg: 'Um erro incomum aconteceu! Por favor, tente novamente.',
        });
      })
      .catch(() => {
        setShowModal({
          msg: 'Houve um erro ao cadastrar nova música! Por favor, tente novamente.',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Header text='Cadastro' showBackButton />

      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <TextInputFilled
            placeholder='Nome da música'
            value={form.name}
            onChangeText={(text) => {
              handleChange('name', text);
            }}
          />
          <TextInputFilled
            placeholder='Cantor ou versão'
            value={form.singer}
            onChangeText={(text) => {
              handleChange('singer', text);
            }}
          />
          <TextInputFilled
            placeholder='Link do Cifra Club'
            value={form.url}
            onChangeText={(text) => {
              handleChange('url', text);
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <RoundButton text='Cadastrar' action={handleSubmit} />
      </View>
    </View>
  );
};

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
});

export default MusicRegister;
