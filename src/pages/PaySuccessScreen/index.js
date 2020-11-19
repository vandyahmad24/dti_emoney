import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IQRCode, ITopUp} from '../../assets';
import {CButton, Jarak, NotifTransaksi} from '../../components';
import {colors, fonts} from '../../utils';

const PaySuccessScreen = () => {
  return (
    <View style={styles.page}>
      <Jarak height={62} />
      <Image source={ITransfer} />
      <Jarak height={43} />
      <Text style={styles.text}>Transfer Berhasil!</Text>
      <Jarak height={23} />
      <Text style={styles.text}>Rp. 60,000</Text>
      <NotifTransaksi text1="20 Agustus 2020" text2="Penerima : DTI Telkom University" text3="Jl. Ciparay No 20B, Kota Bandung" />
      <CButton tulisan="SELESAI" />
    </View>
  );
};

export default PaySuccessScreen;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
  },
});
