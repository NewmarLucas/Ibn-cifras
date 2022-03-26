import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from '../components'

export const Form = ({ inputs }) => {
  return (
    <View style={styles.formContainer}>
      {inputs &&
        inputs.map((item) => (
          <TextInput
            key={item.placeholder}
            value={item.value}
            placeholder={item.placeholder}
            onChangeText={item.onChange}
          />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 25,
    marginBottom: 25,
  },
})
