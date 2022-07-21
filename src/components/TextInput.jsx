import React from 'react'
import { StyleSheet, TextInput as Input } from 'react-native'

export const TextInput = ({ value, placeholder, onChangeText }) => {
  return (
    <Input
      value={value}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor='#999'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    marginBottom: 15,
    padding: 10,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})
