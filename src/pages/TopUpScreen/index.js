import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ITopUp} from '../../assets';
import {CButton, Header, InputText, Jarak} from '../../components';
import {colors} from '../../utils';

const TopUpScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Top Up" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image source={ITopUp} style={styles.gambar} />
        <InputText placeholder="Nominal Top Up" warna="white" />
        <Jarak height={19} />
        <CButton tulisan="Submit" onPress={() => navigation.navigate('QRKonfirm')}/>
      </View>
    </View>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.gray,
  },
  gambar: {
    height: 156,
    width: 156,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 106,
  },
});
