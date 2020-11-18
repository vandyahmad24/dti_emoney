import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoEmoney} from '../../assets';
import {CButton, CLink, InputText, Jarak} from '../../components';
import {colors} from '../../utils';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <LogoEmoney />
      <Jarak height={19}/>
      <InputText placeholder="Email" />
      <Jarak height={25}/>
      <InputText placeholder="Password" />
      <Jarak height={25}/>
      <CButton tulisan="Klik disini" />
      <Jarak height={27}/>
      <CLink title="Register" size={14} onPress={() => navigation.navigate('RegisterPage')} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
