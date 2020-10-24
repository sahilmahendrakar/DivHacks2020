import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default class NewPlantScreen extends React.Component {
    state={
        plantid:"",
        name:"",
        species:"",
        notes:"",
        water:"",
        fertilize:"",
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style= {styles.title}>Add a new Plant!</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Name" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({name:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Species" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({species:text})}/>
                </View>
                <View style={styles.longInputView} >
                    <TextInput  
                        multiline
                        style={styles.inputText}
                        placeholder="Notes" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({notes:text})}/>
                </View>
                <Text style = {styles.normalText}> Water Every ... </Text>
                <Text style = {styles.normalText}> Fertilize Every ... </Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress = {() => this.props.navigation.navigate('NewPlant')}>
                    <Text style={styles.loginText}>Add!</Text>
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
    title:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fff",
        marginBottom:30,

    },
    normalText:{  
        fontWeight:"normal",
        fontSize:20,
        color:"#fff"
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
    longInputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:200,
        marginBottom:20,
        justifyContent: "flex-start",
        padding:20
      },
    inputText:{
      height:30,
      color:"black"
    },
    addButton:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
    },
})