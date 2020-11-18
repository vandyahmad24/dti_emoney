import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TombolBack} from '../../../assets';

const GoBack = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TombolBack/>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
