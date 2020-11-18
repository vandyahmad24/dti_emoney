import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import { GoBack, Jarak } from '../../atom';

const Header = ({text, onPress}) => {
  return (
    <View style={styles.page}>
      <GoBack onPress={onPress}/>
      <Jarak width={10}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: colors.header,
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text:{
    fontFamily:fonts.primary[500],
    fontSize:18,
    color:colors.white
  }
});
