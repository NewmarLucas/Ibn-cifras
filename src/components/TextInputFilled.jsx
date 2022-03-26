import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const TextInputFilled = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      value={value}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor='#999'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})
