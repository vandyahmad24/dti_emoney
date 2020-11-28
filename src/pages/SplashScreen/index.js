import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {LogoEmoney} from '../../assets';
import {colors} from '../../utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        navigation.replace('MainApp');
      } else {
        setTimeout(() => {
          navigation.replace('LoginPage');
        }, 3000);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.page}>
      <LogoEmoney />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
