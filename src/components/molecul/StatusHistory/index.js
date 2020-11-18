import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TransferBolakBalik} from '../../../assets';
import {colors} from '../../../utils';

const StatusHistory = () => {
  return (
    <View style={styles.page}>
      <View style={styles.containerIcon}>
        <TransferBolakBalik height={34} width={34} />
      </View>

      <Text>Rp. 80.000</Text>
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
    backgroundColor: 'yellow',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  containerIcon:{
      display:'flex',
      justifyContent:'center',
    //   backgroundColor:,
      marginHorizontal:11,
  }
});
