import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Empty = () => {
  return (
    <View style={styles.container}>
      <Feather name='search' size={26} color='#fff' />
      <Text style={styles.text}>Nada por aqui!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 15,
  },
});
