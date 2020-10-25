import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TabBarIOS } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import { firebaseConfig } from './config/firebaseconfig';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import FillNameScreen from './screens/FillNameScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddAPlantScreen from './screens/AddAPlant';
import MapScreen from './screens/MapScreen';
import NewPlantScreen from './screens/NewPlantScreen';
import ViewPlantScreen from './screens/ViewPlantScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function Home() {
  return(
    <Drawer.Navigator style={{backgroundColor: 'tomato'}}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
      <Drawer.Screen name="AddAPlant" component={AddAPlantScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ViewPlant" component={ViewPlantScreen} options={ {headerShown: false }}/> 
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="Maps" component={MapScreen} options={ {headerShown: false }}/>
        <Stack.Screen name="NewPlant" component={NewPlantScreen} options={ {headerShown: false }}/>
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

