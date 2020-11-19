import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const NotifTransaksi = ({text1, text2, text3}) => {
  return (
    <View style={styles.containerInfo}>
      <Text style={styles.pembayaran}>{text1}</Text>
      <Text style={styles.nama}>{text2}</Text>
      <Text style={styles.alamat}>{text3}</Text>
    </View>
  );
};

export default NotifTransaksi;

const styles = StyleSheet.create({
  containerInfo: {
    backgroundColor: colors.button.primary.background,
    marginVertical: 32,
    height: 150,
    width: 278,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  pembayaran: {
    marginTop: 17,
    color: colors.white,
    fontFamily: fonts.primary[300],
    fontSize: 18,
  },
  nama: {
    marginTop: 13,
    color: colors.white,
    fontFamily: fonts.primary[400],
    fontSize: 24,
  },
  alamat: {
    marginTop: 2,
    color: colors.white,
    fontFamily: fonts.primary[400],
    fontSize: 16,
    marginBottom: 29,
  },
});
