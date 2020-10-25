import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'

import styling from '../config/styling';

export default class LoginScreen extends React.Component {
  state={
    email:"",
    password:""
  }

  login = (email, password) => {
    console.log("signing up: " + email);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      console.log(error)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>{styling.applicationName}</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.loginText}>sign up</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styling.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: styling.mainFont,
  },
  logo:{
    // fontWeight:"bold",
    fontSize:50,
    color:"#fff",
    marginBottom:40,
    fontFamily: styling.mainFont,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    fontFamily: styling.mainFont,
  },
  inputText:{
    height:50,
    color:"black",
    fontFamily: styling.mainFont,
  },
  forgot:{
    color:"white",
    fontSize:11,
    fontFamily: styling.mainFont,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:styling.secondaryColor,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    fontFamily: styling.mainFont,
  },
  loginText:{
    color:"white",
    fontWeight: "bold",
    fontFamily: styling.mainFont,
  }
});