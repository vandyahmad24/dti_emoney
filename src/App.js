import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoginPage} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  // page: {
  //   flex:1
  // },
});
