import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BoxMenu, Jarak} from '../../components/atom';
import {StatusHistory, InfoSaldo} from '../../components/molecul';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../utils';

const HomeScreen = ({navigation}) => {
  const [name, setNama] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const nilai = JSON.parse(value);
        console.log(typeof nilai);
        changeState(nilai.nama_user);
      }
    } catch (e) {
      // error reading value
    }
  };
  function changeState(nama) {
    setNama(nama);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.page}>
      <InfoSaldo nama={name} saldo="Rp. 1.234.567.000" />
      <View style={styles.container}>
        <View style={styles.containerTombol}>
          <BoxMenu
            type="Top Up"
            onPress={() => navigation.navigate('TopUpScreen')}
          />
          <BoxMenu type="QR Pay" onPress={() => navigation.navigate('QRPay')} />
          <BoxMenu
            type="Transfer"
            onPress={() => navigation.navigate('TransferScreen')}
          />
        </View>
        <View style={styles.containerHistory}>
          <Text style={styles.textSaldo}>5 Transaksi Terakhir Anda</Text>
          <StatusHistory />
          <Jarak height={16} />
          <StatusHistory />
          <Jarak height={16} />
          <StatusHistory />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.gray,
    flex: 1,
  },
  container: {
    marginHorizontal: 16,
  },

  containerHistory: {
    marginTop: 30,
  },
  textSaldo: {
    textAlign: 'left',
  },
  containerTombol: {
    marginTop: 20,
    height: 91,
    width: 320,
    backgroundColor: colors.button.primary.background,
    borderRadius: 7,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,
  },
});
