import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CButton, Jarak} from '../../components/atom';
import { ProfilSegment } from '../../components/molecul';
import {colors} from '../../utils';

const ProfilScreen = () => {
  return (
    <View style={styles.page}>
      <ProfilSegment nama="Vandy Ahmad Misry Ar Razy" nohp="088232218327"/>
      <View style={styles.containerButton}>
        <Jarak height={35} />
        <CButton tulisan="UBAH PROFIL" />
        <Jarak height={26} />
        <CButton tulisan="GANTI PASSWORD" />
        <Jarak height={26} />
        <CButton tulisan="LOGOUT" />
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
