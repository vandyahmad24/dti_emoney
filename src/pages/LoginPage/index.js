import Axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogoEmoney} from '../../assets';
import {CButton, CLink, InputText, Jarak} from '../../components';
import {colors} from '../../utils';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitLogin = async () => {
    // disabled = true;
    console.log(email);
    Axios.post(
      'https://emoneydti.basicteknologi.co.id/index.php/api/users/login',
      {
        email: email,
        password: password,
      },
    ).then(function (response) {
      if (response.data.status == 'false') {
        ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
      } else {
        AsyncStorage.setItem('user', JSON.stringify(response.data.data));
        navigation.replace('MainApp');
      }
    });
  };

  return (
    <View style={styles.page}>
      <LogoEmoney />
      <Jarak height={19} />
      <InputText
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <Jarak height={25} />
      <InputText
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <Jarak height={25} />
      <CButton tulisan="Masuk" onPress={submitLogin} />
      <Jarak height={27} />
      <CLink
        title="Register"
        size={14}
        onPress={() => navigation.navigate('RegisterPage')}
      />
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
