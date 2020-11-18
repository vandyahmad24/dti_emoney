import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {HomeIcon, ProfileIcon, TransactionIcon} from '../../../assets';

const TabItem = ({type, onPress, onLongPress}) => {
  const IconBottom = () => {
    if (type == 'HomeScreen') {
        return <HomeIcon height={24} width={24} />;
    }
    if (type == 'ProfilScreen') {
        return <ProfileIcon height={24} width={24} />;
    }
    if (type == 'TransactionHistory') {
        return <TransactionIcon height={24} width={24} />;
    }
   return <HomeIcon height={24} width={24} />;
  };

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <IconBottom />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
