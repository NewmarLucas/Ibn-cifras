import React from 'react'
import { StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { View } from 'react-native'

export const FormPicker = ({ options, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        style={styles.input}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        {options?.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  input: {
    height: 40,
    width: 250,
    padding: 10,
    color: '#fff',

    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})
