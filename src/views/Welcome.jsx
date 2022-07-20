import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Empty, Header, ListItem } from '../components';
import api from '../services/api';

const Welcome = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [listItems, setListItems] = useState([]);

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
          setListItems(data);
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

  return (
    <View style={styles.container}>
      <Header showLogin text='Cifras IBN' />

      <View style={styles.listContainer}>
        {listItems.length === 0 && <Empty />}
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <ListItem
              key={item.value}
              action={() => {
                navigation.navigate('List', { listItem: item });
              }}
              title={item.label}
              subtitle={item.subtitle}
            />
          )}
          keyExtractor={(item) => item.value}
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
    marginTop: 50,
  },
  itemCard: {
    padding: 20,
  },
  itemText: {
    color: '#fff',
    fontSize: 32,
  },
});

export default Welcome;
