import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IQRCode} from '../../assets';
import {Header} from '../../components';
import {colors} from '../../utils';

const QRPay = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="QR Pay" onPress={() => navigation.goBack()}/>
      <TouchableOpacity onPress={() => navigation.navigate('QRKonfirm')}>
        <View style={styles.container}>
          <Image source={IQRCode} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default QRPay;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    marginTop: 102,
    alignItems: 'center',
  },
  image: {
    height: 319,
    width: 319,
  },
});
