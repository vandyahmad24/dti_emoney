import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {BoxMenu} from '../../atom';

const HomeMenu = ({navigation}) => {
  return (
    <View style={styles.containerTombol}>
      <BoxMenu type="Top Up" onPress={() => alert('hay')} />
      <BoxMenu type="QR Pay" />
      <BoxMenu type="Transfer" />
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  
});
