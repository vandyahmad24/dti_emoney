import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IConfirm} from '../../assets';
import {Baris, CButton, Header, NotifTransaksi} from '../../components';
import {colors, fonts} from '../../utils';

const QRKonfirm = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        text="Konfirmasi Pembayaran"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Image source={IConfirm} style={styles.image} />
        <Text style={styles.angka}>Rp. 60.000</Text>
        <Baris />
        <NotifTransaksi
          text1="Pembayaran Kepada"
          text2="DTI Telkom University"
          text3="Jl. Telekomunikasi Bandung"
        />
        <CButton tulisan="Submit" />
      </View>
    </View>
  );
};

export default QRKonfirm;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
  },
  angka: {
    fontSize: 24,
    fontFamily: fonts.primary[300],
  },
  image: {
    height: 199,
    width: 199,
    marginTop: 51,
  },
});
