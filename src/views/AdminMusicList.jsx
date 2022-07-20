import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ModalContext } from '../providers/modal';
import { Header, ListItem, RoundButton, Alert, Empty } from '../components';
import api from '../services/api';
import { getAuthToken } from '../helpers/utils';

const List = ({ route, navigation }) => {
  const { setShowModal } = useContext(ModalContext);
  const { list } = route.params;
  const [open, setOpen] = useState(false);

  const isFocused = useIsFocused();
  const [listItems, setListItems] = useState([]);

  const [form, setForm] = useState({
    musicName: '',
    cantor: '',
    tom: '',
  });

  const getMusicList = () => {
    try {
      api
        .get(`/musics-from-list/${list?.label}`)
        .then((res) => {
          setListItems(res?.data);
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (isFocused && list) getMusicList();
  }, [isFocused, list]);

  const handleDelete = (data) => {
    setShowModal({
      msg: `Deseja excluir a música "${data?.name}" dessa lista?`,
      onCancel: () => {},
      onOk: async () => {
        api
          .delete(
            `/admin/list/${data?._id}-${list?.label}`,
            await getAuthToken()
          )
          .then((res) => {
            if (res.data === 'Removed') {
              getMusicList();
            }
          });
      },
    });
  };

  const options = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
    { label: 'F', value: 'F' },
  ];

  const handleChange = (name, text) => {
    setForm((form) => ({
      ...form,
      [name]: text,
    }));
  };

  const inputs = [
    {
      placeholder: 'Nome da música',
      value: form.musicName,
      onChange: (text) => {
        handleChange('musicName', text);
      },
    },
    {
      placeholder: 'Cantor',
      value: form.cantor,
      onChange: (text) => {
        handleChange('cantor', text);
      },
    },
    {
      placeholder: 'Tom',
      type: 'select',
      options,
      value: form.tom,
      onChange: (text) => {
        handleChange('tom', text);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Header text={list?.label ?? ''} showBackButton />
      {open && (
        <Alert
          msg='Selecione uma música'
          form={inputs}
          buttonText='Adicionar'
          onCancel={() => {}}
          onOk={() => {}}
          setOpen={setOpen}
        />
      )}

      <Text style={styles.textLabel}>Músicas:</Text>
      <View style={styles.listContainer}>
        {listItems.length === 0 && <Empty />}
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              action={() => {
                navigation.navigate('Music', { url: item?.url });
              }}
              deleteAction={() => {
                handleDelete(item);
              }}
              title={item.name}
              subtitle={item.singer}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          text='Adicionar Música'
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
  textLabel: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'InterLight',
    fontSize: 16,
    color: '#fff',
  },
  listContainer: {
    marginHorizontal: 16,
    width: '100%',
    height: '55%',
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    height: '10%',
  },
});

export default List;
