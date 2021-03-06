import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'

import styling from '../config/styling';

export default class FillNameScreen extends React.Component {
  state={
    name:""
  }

  database = firebase.database();

  setName = (name, uid) => {
    this.database.ref('/users/' + uid).set({
      username: name
    });
    console.log("nihao" + this.props.route.params);
    this.props.navigation.navigate('Home', {screen: 'HomeScreen', params: {uid: user.uid}});
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>{styling.applicationName}</Text>
        <View style={styles.inputView} >
          <TextInput 
            style={styles.inputText}
            placeholder="name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={() => this.setName(this.state.name, this.props.route.params.uid)}>
          <Text style={styles.loginText}>set name</Text>
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