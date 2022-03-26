import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export const RoundButton = ({ action, text }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#19A0CB',
    borderRadius: 100,
    paddingVertical: 13,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})
