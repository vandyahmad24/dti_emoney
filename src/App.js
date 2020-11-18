import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { LoginPage } from './pages';
import {fonts} from './utils/fonts';

const App = () => {
  return (
    <View style={styles.page}>
      <LoginPage/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex:1
  },
});
