import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styling from '../config/styling';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/PlantIcon.png')} />
      <Text style={styles.text}>{styling.applicationName}</Text>

      <TouchableOpacity activeOpacity={0.8} style={{top:50}} onPress = {() => navigation.navigate('Login')}>
        <View style = {{backgroundColor: styling.secondaryColor, alignItems: 'center', 
                    justifyContent: 'center', borderRadius: 30, paddingRight:30, paddingLeft:30, paddingVertical:10}}
           > 
        <Text style = {{color: 'white', fontWeight:'bold'}}>enter</Text> 
    </View>
</TouchableOpacity> 
      <StatusBar style="auto" />
    </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: styling.primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: styling.mainFont,
    },
    text: {
      fontSize: 50,
      fontWeight: "bold",
      color: "white",
      fontFamily: styling.mainFont,
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