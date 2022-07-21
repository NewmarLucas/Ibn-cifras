import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ListItem = ({
  title,
  subtitle,
  action = () => {},
  deleteAction,
  editAction,
}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemSubTitle}>{subtitle}</Text>
        </View>
        <View
          style={{
            ...styles.buttonsContainer,
            justifyContent:
              editAction && deleteAction ? 'space-evenly' : 'flex-end',
            paddingHorizontal: editAction && deleteAction ? 0 : 10,
          }}
        >
          {editAction && (
            <TouchableOpacity onPress={editAction} style={styles.editContainer}>
              <Feather name='edit-2' size={25} color='#eee' />
            </TouchableOpacity>
          )}
          {deleteAction && (
            <TouchableOpacity
              onPress={deleteAction}
              style={styles.trashContainer}
            >
              <Feather name='trash-2' size={25} color='#E27F86' />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
  },
  textContainer: {
    justifyContent: 'space-between',
    maxWidth: '75%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '25%',
  },
  editContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'InterSemiBold',
  },
  itemSubTitle: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'InterLight',
  },
  loginButton: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'InterMedium',
  },
});
