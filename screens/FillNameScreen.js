import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'

export default class FillNameScreen extends React.Component {
  state={
    name:""
  }

  database = firebase.database();

  setName = (name, uid) => {
    this.database.ref('/users/' + uid).set({
      username: name
    });

    this.props.navigation.navigate('Home', {screen: 'HomeScreen', params: {uid: uid}});
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>PlantPal</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={() => this.setName(this.state.name, this.props.route.params.uid)}>
          <Text style={styles.loginText}>SET NAME</Text>
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