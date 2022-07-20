import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const RoundButton = ({
  action,
  text,
  isDeleteButton = false,
  style = {},
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        ...styles.button,
        ...style,
        backgroundColor: isDeleteButton ? '#E20C0C' : '#19A0CB',
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',

    borderRadius: 100,
    paddingVertical: 13,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
});
