import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, TextInput } from 'react-native';
import { Header, ListItem, RoundButton } from '../components';
import api from '../services/api';
import { useIsFocused } from '@react-navigation/native';

const Admin = ({ navigation }) => {
  const [filter, setFilter] = useState('');
  const [listItems, setListItems] = useState([]);
  const isFocused = useIsFocused();

  const getMusics = () => {
    try {
      api.get(`/musics?name=${filter}`).then((res) => {
        setListItems(res.data);
      });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (isFocused) getMusics();
  }, [filter, isFocused]);

  return (
    <View style={styles.container}>
      <Header text='Admin' showExit />

      <TextInput
        value={filter}
        style={styles.input}
        placeholder='Pesquisar'
        onChangeText={(text) => setFilter(text)}
        placeholderTextColor='#BDBDBD'
      />

      <Text style={styles.textLabel}>Músicas:</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <ListItem
              key={item?._id}
              editAction={() => {
                navigation.navigate('EditMusic', { music: item });
              }}
              action={() => {
                navigation.navigate('Music', { url: item.url });
              }}
              title={item?.name}
              subtitle={item?.singer}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          text='Cadastrar Música'
          action={() => {
            navigation.navigate('MusicRegister');
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
    marginVertical: 10,
    fontFamily: 'InterLight',
    fontSize: 16,
    color: '#fff',
  },
  listContainer: {
    marginHorizontal: 16,
    width: '100%',
    height: '50%',
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    height: 70,
  },
  input: {
    height: 50,
    width: '90%',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
});

export default Admin;
