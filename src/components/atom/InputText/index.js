import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { colors } from '../../../utils';

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
    color: '#000',
    backgroundColor:colors.white,
    borderColor: colors.borderInput,
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    width: 280,
    height: 48,
  },
});
