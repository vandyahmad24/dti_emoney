import Axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CButton, Header, InputText, Jarak} from '../../components';
import {colors} from '../../utils';

const RegisterPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [nomor, setNomor] = useState('');

  const submitRegister = async () => {
    console.log(email + password + nama + nomor);
    Axios.post(
      'https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi',
      {
        email: email,
        password: password,
        nama: nama,
        nomor_handphone: nomor,
      },
    )
      .then(function (response) {
        console.log(response.data);
        if (response.data.status == 'true') {
          ToastAndroid.show(
            'Akun Anda Berhasil di Daftarkan',
            ToastAndroid.SHORT,
          );
          navigation.navigate('LoginPage');
        } else {
          ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.page}>
      <Header text="Registrasi Akun" onPress={() => navigation.goBack()} />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerText}>
            <InputText
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
            <Jarak height={30} />
            <InputText
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
            <Jarak height={30} />
            <InputText
              placeholder="Nama"
              onChangeText={(value) => setNama(value)}
              value={nama}
            />
            <Jarak height={30} />
            <InputText
              placeholder="No Handphone"
              keyboardType="numeric"
              onChangeText={(value) => setNomor(value)}
              value={nomor}
            />
            <Jarak height={30} />
            <CButton tulisan="Registrasi" onPress={submitRegister} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'red',
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    marginVertical: 95,
  },
});
