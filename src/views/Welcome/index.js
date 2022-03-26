import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Header, ListItem } from '../../components'

const Welcome = ({ navigation }) => {
  const listItems = [
    { subtitle: 'Murilo', label: 'Culto de Terça', value: 'tuesday' },
    { subtitle: 'Murilo', label: 'Culto de Sábado', value: 'saturday' },
    { subtitle: 'Murilo', label: 'Culto de Domingo', value: 'sunday' },
    { subtitle: 'Murilo', label: 'Outros Cultos', value: 'others' },
  ]

  return (
    <View style={styles.container}>
      <Header showLogin text='Cifras IBN' />

      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({ item }) => <ListItem action={() => { navigation.navigate('List', { culto: item.label }) }} title={item.label} subtitle={item.subtitle} />}
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
    justifyContent: 'space-around',
    backgroundColor: '#383838'
  },
  listContainer: {
    marginHorizontal: 16,
    width: '100%',
    marginTop: 50
  },
  itemCard: {
    padding: 20,
  },
  itemText: {
    color: '#fff',
    fontSize: 32,
  },
})

export default Welcome
