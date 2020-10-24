import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'

export default class AddAPlantScreen extends React.Component {
  state={
    name:"",
    location:""
  }

  finish = (name, location) => {
    firebase.database().ref('plants/' + name).set({
        name: name,
        location: location,
    });

    this.props.navigation.navigate('Home');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Add a Plant!</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput 
            style={styles.inputText}
            placeholder="Location..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({location:text})}/>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={() => this.finish(this.state.name, this.state.location)}>
          <Text style={styles.loginText}>PLANT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73db8d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fff",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
  },
  loginText:{
    color:"white",
    fontWeight: "bold"
  }
});