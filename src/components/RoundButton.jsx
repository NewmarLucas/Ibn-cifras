import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export const RoundButton = ({ action, text, isDeleteButton = false }) => {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      backgroundColor: isDeleteButton ? '#E20C0C' : '#19A0CB',
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

  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
