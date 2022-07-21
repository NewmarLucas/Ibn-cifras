import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Header, ListItem, Empty } from '../components';
import api from '../services/api';

const List = ({ route, navigation }) => {
  const { listItem } = route.params;
  const isFocused = useIsFocused();
  const [listItems, setListItems] = useState([]);

  const getMusicList = () => {
    try {
      api
        .get(`/musics-from-list/${listItem?.label}`)
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
    if (isFocused && listItem) getMusicList();
  }, [isFocused, listItem]);

  return (
    <View style={styles.container}>
      <Header text={listItem?.label ?? ''} showBackButton />

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
              title={item.name}
              subtitle={item.singer}
            />
          )}
          keyExtractor={(item) => item._id}
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
    height: '65%',
  },
});

export default List;
