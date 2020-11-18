import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoEmoney} from '../../assets';
import {CButton, InputText} from '../../components';

const LoginPage = () => {
  return (
    <View style={styles.page}>
      <LogoEmoney />
      <InputText placeholder="Email" />
      <InputText placeholder="Password" />
      <CButton tulisan="Klik disini" />
      <Text>Halo</Text>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems: 'center',
    }
});
