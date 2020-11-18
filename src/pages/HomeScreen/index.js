import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BoxMenu} from '../../components/atom';
import { StatusHistory } from '../../components/molecul';
import {colors, fonts} from '../../utils';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.containerText}>
        <Text style={styles.saldo}>Saldo Anda</Text>
        <Text style={styles.isiSaldo}>Rp. 1.234.567.000</Text>
      </View>
      <View style={styles.containerTombol}>
        <BoxMenu type="Top Up" />
        <BoxMenu type="QR Pay" />
        <BoxMenu type="Transfer" />
      </View>
      <View style={styles.containerHistory}>
        <Text style={styles.textSaldo}>5 Transaksi Terakhir Anda</Text>
        <StatusHistory/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.gray,
    flex: 1,
    paddingHorizontal: 16,
  },
  containerText: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    height: 134,
    alignSelf: 'stretch',
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
  containerTombol: {
    marginTop: 20,
    height: 91,
    width: 320,
    backgroundColor: colors.button.primary.background,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 7,
    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,
  },
  containerHistory: {
    marginTop: 40,
  },
  textSaldo: {
    textAlign: 'left',
  },
});
