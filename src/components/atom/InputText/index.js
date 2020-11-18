import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const InputText = ({placeholder}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    borderColor: '#C3C3C3',
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    width: 280,
    height: 48,
  },
});
