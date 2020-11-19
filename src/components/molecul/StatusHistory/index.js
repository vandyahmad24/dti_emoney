import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TransferBolakBalik} from '../../../assets';
import {colors, fonts} from '../../../utils';

const StatusHistory = () => {
  return (
    <View style={styles.page}>
      <View style={styles.containerIcon}>
        <TransferBolakBalik height={34} width={34} />
      </View>
      <View style={styles.containerText}>
        <View style={styles.containerText1}>
          <Text style={styles.saldo}>Rp. 80.000</Text>
          <Text style={styles.transfer}>Transfer ke 082240206861</Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.tanggal}>20/08/2020</Text>
        </View>
      </View>
    </View>
  );
};

export default StatusHistory;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginTop: 8,
    width: 319,
    height: 72,
    backgroundColor: 'white',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  containerIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 11,
  },
  containerText: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 5,
  },
  containerText1: {
    flex: 2,
  },
  saldo: {
    marginTop: 16,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
  },
  transfer: {
    marginTop: 9,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
  },
  containerText2: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 4,
  },
  tanggal: {
    marginTop: 16,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
  },
});
