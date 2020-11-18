import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginPage, RegisterPage, HomeScreen, TransactionHistory, ProfilScreen} from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props=> <BottomNavigator{...props}/> } >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TransactionHistory" component={TransactionHistory} />
      <Tab.Screen name="ProfilScreen" component={ProfilScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
