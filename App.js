import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ButtonTest from './screens/ButtonTest';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="ButtonTest" component ={ButtonTest} options = {{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

