import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/PlantIcon.png')} />
      <Text style={styles.text}>PlantPals</Text>

      <TouchableOpacity activeOpacity={0.8} style={{top:50}} onPress = {() => navigation.navigate('Login')}>
        <View style = {{backgroundColor: '#424141', alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 30, paddingRight:30, paddingLeft:30, paddingVertical:10}}
           > 
        <Text style = {{color: 'white', fontWeight:'bold'}}>Login</Text> 
    </View>
</TouchableOpacity> 
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#73db8d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 50,
      fontWeight: "bold",
      color: "white"
    },
    image: {
      top: -50,
      width: 150,
      height: 150,
      tintColor: '#fff',
      resizeMode: 'contain',
    }
  });
  

export default WelcomeScreen;