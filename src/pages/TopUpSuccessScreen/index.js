import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ITopUp} from '../../assets';
import {CButton, Jarak, NotifTransaksi} from '../../components';
import {colors, fonts} from '../../utils';

const TopUpSuccessScreen = () => {
  return (
    <View style={styles.page}>
      <Jarak height={62} />
      <Image source={ITopUp} />
      <Jarak height={43} />
      <Text style={styles.text}>Transfer Berhasil!</Text>
      <Jarak height={23} />
      <Text style={styles.text}>Rp. 60,000</Text>
      <NotifTransaksi
        text1="20 Agustus 2020"
        text2="VA Mandiri"
      />
      <CButton tulisan="SELESAI" />
    </View>
  );
};

export default TopUpSuccessScreen;

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
