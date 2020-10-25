import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import { firebaseConfig } from './firebaseConfig';

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Home" component={MapScreen} options={ {headerShown: false }}/>
    //     {/* <Stack.Screen name="Home" component={WelcomeScreen} options={ {headerShown: false }}/>
    //     <Stack.Screen name="Login" component={LoginScreen} options={ {headerShown: false }}/> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MapScreen />
    
  );
}

