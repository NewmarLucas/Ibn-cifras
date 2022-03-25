import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const ListItem = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.itemImage} />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemSubTitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    height: 50,
  },
  textContainer: {
    justifyContent: 'space-between',
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
