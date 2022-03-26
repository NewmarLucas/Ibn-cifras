import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const Alert = ({ msg, onOk, onCancel, setOpen, form, buttonText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        {msg && <Text style={styles.text}>{msg}</Text>}
        {form && <View>{form}</View>}

        <View style={styles.buttons_container}>
          {onCancel && (
            <TouchableOpacity
              style={styles.button_cancel}
              onPress={() => {
                onCancel()
                return setOpen(false)
              }}
            >
              <Text style={styles.button_text_cancel}>Cancelar</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onOk && onOk()
              return setOpen(false)
            }}
          >
            <Text style={styles.button_text}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    position: 'absolute',
    zIndex: 9,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(0, 0, 0,0.5)',
  },
  modal: {
    paddingTop: 30,
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    backgroundColor: '#383838',
    borderRadius: 8,
  },
  text: {
    paddingHorizontal: 30,
    marginBottom: 30,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    maxWidth: '70%',
    fontFamily: 'InterSemiBold',
  },
  button_text: {
    color: '#fff',
    fontFamily: 'InterSemiBold',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#19A0CB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  button_text_cancel: {
    color: '#fff',
    fontFamily: 'InterSemiBold',
    fontSize: 14,
  },
  button_cancel: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  buttons_container: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
