import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import { firebaseConfig } from './config/firebaseconfig';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="Loading" component={LoadingScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={ {headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

