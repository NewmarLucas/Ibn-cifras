import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { Header, ListItem, RoundButton } from '../components'

const Admin = ({ navigation }) => {
  const listItems = [
    { id: '1', music: 'Teus Sonhos', cantor: 'Fernandinho' },
    { id: '2', music: 'Mil Graus', cantor: 'Renascer Praise' },
    { id: '3', music: 'Atos 2', cantor: 'Gabriela Rocha' },
    { id: '4', music: 'Pedra na Mão', cantor: 'Discopraise' },
    { id: '5', music: 'Pedra na Mão', cantor: 'Discopraise' },
    { id: '6', music: 'Pedra na Mão', cantor: 'Discopraise' },
    { id: '7', music: 'Pedra na Mão', cantor: 'Discopraise' },
    { id: '8', music: 'Pedra na Mão', cantor: 'Discopraise' },
    { id: '9', music: 'Pedra na Mão', cantor: 'Discopraise' },
  ]

  return (
    <View style={styles.container}>
      <Header text='Admin' showBackButton />

      <Text style={styles.textLabel}>Músicas:</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              action={() => {
                navigation.navigate('Music', { musicName: item.music })
              }}
              title={item.music}
              subtitle={item.cantor}
            />
          )}
          keyExtractor={(item) => item.value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton text='Cadastrar Música' action={() => {}} />
      </View>
    </View>
  )
}

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
    height: '60%',
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    height: '10%',
  },
})

export default Admin
