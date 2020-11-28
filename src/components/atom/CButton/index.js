import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils/';

const CButton = ({tulisan, onPress, disabled}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
      <Text style={styles.styletulisan}>{tulisan}</Text>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button.primary.background,
    width: 288,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styletulisan: {
    color: '#ffff',
    fontFamily: fonts.primary[500],
    fontSize: 16,
  },
});
