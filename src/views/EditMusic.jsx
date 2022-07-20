import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import api from '../services/api';
import { ModalContext } from '../providers/modal';
import { Header, TextInputFilled, RoundButton } from '../components';
import { getAuthToken, parseLink } from '../helpers/utils';

const EditMusic = ({ navigation, route }) => {
  const { setShowModal } = useContext(ModalContext);
  const { music } = route.params;
  const [form, setForm] = useState({
    name: music?.name ?? '',
    singer: music?.singer ?? '',
    url: music?.url ?? '',
  });

  const handleChange = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
    if (form.url === '' || form.singer === '' || form.name === '') {
      return setShowModal({
        msg: 'Você precisa preencher todos os campos para poder salvar',
      });
    }

    api
      .put(
        `/admin/music/${music?._id}`,
        form.url === music.url ? form : { ...form, url: parseLink(form.url) },
        await getAuthToken()
      )
      .then((res) => {
        if (res?.data === 'Updated') {
          setShowModal({ msg: 'Música salva com sucesso' });
          navigation.goBack();
          return;
        }
        setShowModal({
          msg: 'Um erro incomum aconteceu! Por favor, tente novamente.',
        });
      })
      .catch(() => {
        setShowModal({
          msg: 'Houve um erro ao editar esta música! Por favor, tente novamente.',
        });
      });
  };

  const handleDelete = () => {
    setShowModal({
      msg: `Deseja excluir a música: ${music?.name}?`,
      onOk: async () => {
        api.delete(`/admin/music/${music?._id}`, await getAuthToken());
        navigation.goBack();
      },
      onCancel: () => {},
    });
  };

  return (
    <View style={styles.container}>
      <Header text={form.name} showBackButton />

      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <View style={styles.col2}>
            <View style={{ width: '60%' }}>
              <TextInputFilled
                placeholder='Nome da música'
                value={form.name}
                onChangeText={(text) => {
                  handleChange('name', text);
                }}
              />
            </View>
            <View style={{ width: '35%' }}>
              <TextInputFilled
                placeholder='Cantor/versão'
                value={form.singer}
                onChangeText={(text) => {
                  handleChange('singer', text);
                }}
              />
            </View>
          </View>
          <TextInputFilled
            placeholder='Link do Cifra Club'
            value={form.url}
            onChangeText={(text) => {
              handleChange('url', text);
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <RoundButton
          style={{ marginBottom: 15 }}
          text='Salvar'
          action={handleEdit}
        />
        <RoundButton
          style={{ marginBottom: 15 }}
          text='Excluir'
          isDeleteButton
          action={handleDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838',
    justifyContent: 'space-between',
  },
  scroll: {
    margin: 10,
    width: '90%',
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
  buttonsContainer: {
    width: '90%',
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
});

export default EditMusic;
