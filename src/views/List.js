import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { Header, ListItem, RoundButton, Alert } from '../components'

const List = ({ route, navigation }) => {
  const pageTitle = route.params?.culto
  const [open, setOpen] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const listItems = [
    { id: '1', music: 'Teus Sonhos', cantor: 'Fernandinho' },
    { id: '2', music: 'Mil Graus', cantor: 'Renascer Praise' },
    { id: '3', music: 'Atos 2', cantor: 'Gabriela Rocha' },
    { id: '4', music: 'Pedra na Mão', cantor: 'Discopraise' },
  ]

  const inputs = [
    { placeholder: 'Nome da música', value: '', onChange: () => { } },
    { placeholder: 'Cantor', value: '', onChange: () => { } },
    { placeholder: 'Tom', value: '', onChange: () => { } },
  ]


  return (
    <View style={styles.container}>
      <Header text={pageTitle} showBackButton />
      {open && <Alert msg='Selecione uma música' form={inputs} buttonText='Adicionar' onCancel={() => { }} onOk={() => { }} setOpen={setOpen} />}
      {openDeleteModal && <Alert msg='Deseja remover esta música da lista?' buttonText='Remover' onCancel={() => { }} onOk={() => { }} setOpen={setOpenDeleteModal} />}

      <Text style={styles.textLabel}>Músicas:</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({ item }) =>
            <ListItem
              key={item.id}
              deleteAction={() => { setOpenDeleteModal(true) }}
              action={() => { navigation.navigate('Music', { musicName: item.music }) }}
              title={item.music}
              subtitle={item.cantor}
            />
          }
          keyExtractor={item => item.value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton text='Adicionar Música' action={() => { setOpen(true) }} />
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
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'InterLight',
    fontSize: 16,
    color: '#fff'
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
})

export default List
