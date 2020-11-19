import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AddIcon, QRIcon, TransferIcon} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BoxMenu = ({type, onPress}) => {
  const Icon = () => {
    if (type === 'Top Up') {
      return <AddIcon height={24} width={24} />;
    }
    if (type === 'QR Pay') {
      return <QRIcon height={24} width={24} />;
    }
    if (type === 'Transfer') {
      return <TransferIcon height={24} width={24} />;
    }
    return <AddIcon />;
  };
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <View style={styles.container}>
        <Icon />
      </View>
      <Text style={styles.text}>{type}</Text>
    </TouchableOpacity>
  );
};

export default BoxMenu;

const styles = StyleSheet.create({
  page:{
    justifyContent:'center',
    alignItems:'center'
  }, 
  container: {
    marginTop:9,
    backgroundColor: colors.white,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary[500],
    fontSize: 14,
    marginTop: 7,
   
  },
});
