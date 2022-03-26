import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { Header, ListItem } from '../components'

const List = ({ route }) => {
  const pageTitle = route.params?.culto
  const listItems = [
    { id: '1', music: 'Teus Sonhos', cantor: 'Fernandinho' },
    { id: '2', music: 'Mil Graus', cantor: 'Renascer Praise' },
    { id: '3', music: 'Atos 2', cantor: 'Gabriela Rocha' },
    { id: '4', music: 'Pedra na Mão', cantor: 'Discopraise' },
  ]

  return (
    <View style={styles.container}>
      <Header text={pageTitle} />

      <Text style={styles.textLabel}>Músicas:</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({ item }) => <ListItem key={item.id} action={() => console.log(item.id)} title={item.music} subtitle={item.cantor} />}
          keyExtractor={item => item.value}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838'
  },
  textLabel: {
    marginTop: 30,
    marginBottom: 20,
    fontFamily: 'InterLight',
    fontSize: 16,
    color: '#fff'
  },
  listContainer: {
    marginHorizontal: 16,
    width: '100%',
  },
  itemCard: {
    padding: 20,
  },
  itemText: {
    color: '#fff',
    fontSize: 32,
  },
})

export default List
