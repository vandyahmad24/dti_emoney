import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { fonts } from '../../../utils';


const InfoSaldo = ({saldo}) => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.saldo}>Saldo Anda</Text>
      <Text style={styles.isiSaldo}>{saldo}</Text>
    </View>
  );
};

export default InfoSaldo;

const styles = StyleSheet.create({
  containerText: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: 134,
  },
  saldo: {
    marginTop: 66,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
  },
  isiSaldo: {
    fontFamily: fonts.primary[500],
    fontSize: 32,
  },
});
