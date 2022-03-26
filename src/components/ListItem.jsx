import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const ListItem = ({ title, subtitle, action, deleteAction }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.itemImage} />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemSubTitle}>{subtitle}</Text>
        </View>
        {deleteAction && (
          <TouchableOpacity
            onPress={deleteAction}
            style={styles.trashContainer}
          >
            <Feather name='trash-2' size={25} color='#E27F86' />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
  },
  textContainer: {
    justifyContent: 'space-between',
    width: '80%',
  },
  trashContainer: {
    justifyContent: 'center',
    width: '20%',
  },
  itemImage: {
    width: 50,
    height: 50,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    marginRight: 16,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'InterSemiBold',
  },
  itemSubTitle: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'InterLight',
  },
  loginButton: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'InterMedium',
  },
})
