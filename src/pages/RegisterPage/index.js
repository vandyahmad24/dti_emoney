import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {CButton, Header, InputText, Jarak} from '../../components';
import {colors} from '../../utils';

const RegisterPage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Registrasi Akun" onPress={() => navigation.goBack()} />
     
      <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerText}>
        <InputText placeholder="Email" />
        <Jarak height={30}/>
        <InputText placeholder="Password" />
        <Jarak height={30}/>
        <InputText placeholder="Nama" />
        <Jarak height={30}/>
        <InputText placeholder="No Handphone" />
        <Jarak height={30}/>
        <CButton tulisan="Registrasi" onPress={() =>navigation.replace('MainApp')}/>
        </View>
        </ScrollView>
      </View>
     
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  page:{
    backgroundColor:'red',
    flex:1,
  },
  container:{
    display:'flex',
    flex: 1,
    backgroundColor:colors.white,
    justifyContent:'center',
    alignItems:'center'
  },
  containerText:{
   marginVertical:95
  }
});
