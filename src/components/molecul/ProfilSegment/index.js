import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Foto } from '../../../assets';
import {colors, fonts} from '../../../utils';

const ProfilSegment = ({nama, nohp}) => {
  return (
    <View style={styles.containerProfil}>
      <Image source={Foto} style={styles.foto} />
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.hp}>{nohp}</Text>
    </View>
  );
};

export default ProfilSegment;

const styles = StyleSheet.create({
  containerProfil: {
    backgroundColor: colors.button.primary.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 29,
  },
  nama: {
    marginTop: 23,
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.primary[400],
  },
  hp: {
    color: colors.white,
    marginTop: 9,
    marginBottom: 21,
    fontFamily: fonts.primary[400],
    fontSize: 18,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});
