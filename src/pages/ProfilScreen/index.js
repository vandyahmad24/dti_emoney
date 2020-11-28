import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CButton, Jarak} from '../../components/atom';
import {ProfilSegment} from '../../components/molecul';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../utils';

const ProfilScreen = ({navigation}) => {
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    navigation.replace("LoginPage");
  };

  return (
    <View style={styles.page}>
      <ProfilSegment nama="Vandy Ahmad Misry Ar Razy" nohp="088232218327" />
      <View style={styles.containerButton}>
        <Jarak height={35} />
        <CButton tulisan="UBAH PROFIL" />
        <Jarak height={26} />
        <CButton tulisan="GANTI PASSWORD" />
        <Jarak height={26} />
        <CButton tulisan="LOGOUT" onPress={clearAll} />
      </View>
    </View>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    backgroundColor: colors.gray,
    flex: 1,
  },
  containerButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
