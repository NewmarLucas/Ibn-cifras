import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from './TextInput'
import { FormPicker } from './FormPicker'

export const Form = ({ inputs }) => {
  return (
    <View style={styles.formContainer}>
      {inputs &&
        inputs.map((item) =>
          item?.type === 'select' ? (
            <FormPicker
              key={item.value}
              options={item.options}
              setValue={item.onChange}
              value={item.value}
            />
          ) : (
            <TextInput
              key={item.placeholder}
              value={item.value}
              placeholder={item.placeholder}
              onChangeText={item.onChange}
            />
          )
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
})
