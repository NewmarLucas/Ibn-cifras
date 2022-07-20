import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ModalContext } from '../providers/modal';
import { Header, ListItem, RoundButton, Alert } from '../components';
import api from '../services/api';
import { getAuthToken } from '../helpers/utils';

const initialForm = {
  title: '',
  subtitle: '',
  name: '',
};

const ListManager = ({ navigation }) => {
  const { setShowModal } = useContext(ModalContext);
  const isFocused = useIsFocused();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [list, setList] = useState([]);

  const getMusicList = () => {
    try {
      api
        .get(`/list`)
        .then((res) => {
          const data = res?.data?.map((item) => ({
            subtitle: item.subtitle,
            label: item.title,
            value: item._id,
          }));
          setList(data);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (isFocused) getMusicList();
  }, [isFocused]);

  const inputs = [
    {
      placeholder: 'Título',
      value: form.title,
      onChange: (text) => {
        setForm((form) => ({ ...form, title: text }));
      },
    },
    {
      placeholder: 'Subtítulo',
      value: form.subtitle,
      onChange: (text) => {
        setForm((form) => ({ ...form, subtitle: text }));
      },
    },
  ];

  const handleDeleteList = (list) => {
    setShowModal({
      msg: `Deseja mesmo remover a lista ${list.label}?`,
      onOk: async () => {
        api
          .delete(`/admin/delete-list/${list?.title}`, await getAuthToken())
          .then((res) => {
            if (res.data === 'Removed') {
              getMusicList();
            }
          });
      },
      onCancel: () => {},
    });
  };

  const editList = (list) => {
    navigation.navigate('AdminMusicList', { list });
  };

  const handleRegisterList = async () => {
    api.post('/admin/list', form, await getAuthToken()).then((res) => {
      if (res.data === 'Added') {
        setForm(initialForm);
        getMusicList();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header showBackButton text='Editar Listas' />
      {open && (
        <Alert
          msg='Cadastrar Nova Lista'
          form={inputs}
          buttonText='Cadastrar'
          onCancel={() => {
            setForm(initialForm);
          }}
          onOk={handleRegisterList}
          setOpen={setOpen}
        />
      )}

      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem
              key={item.value}
              editAction={() => {
                editList(item);
              }}
              deleteAction={() => {
                handleDeleteList(item);
              }}
              title={item.label}
              subtitle={item.subtitle}
            />
          )}
          keyExtractor={(item) => item.value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          text='Cadastrar Nova Lista'
          action={() => {
            setOpen(true);
          }}
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
  },
  listContainer: {
    marginHorizontal: 16,
    width: '100%',
    marginTop: 40,
  },
  itemCard: {
    padding: 20,
  },
  itemText: {
    color: '#fff',
    fontSize: 32,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 15,
    justifyContent: 'center',
    width: '90%',
    height: 70,
  },
});

export default ListManager;
