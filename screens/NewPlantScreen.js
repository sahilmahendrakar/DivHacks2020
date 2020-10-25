import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import firebase from 'firebase'
import styling from '../config/styling';

export default class NewPlantScreen extends React.Component {
    state={
        plantid:"",
        name:"",
        species:"",
        notes:"",
        water:"",
        fertilize:"",
    }

    finish = (plantid, name, species, notes, water, fertilize, lat, long) => {
        firebase.database().ref('plants/' + plantid).push({
            plantid:plantid,
            name:name,
            species:species,
            notes:notes,
            water:water,
            fertilize:fertilize,
            lat:lat, 
            long:long
        });
    
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style= {styles.title}>add a new plant</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="name" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({name:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="species" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({species:text})}/>
                </View>
                <View style={styles.longInputView} >
                    <TextInput  
                        multiline
                        style={styles.inputText}
                        placeholder="notes" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({notes:text})}/>
                </View>
                <Text style = {styles.normalText}> water  ... </Text>
                <Picker
                    selectedValue={this.state.water}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({water:itemValue})}
                >
                    <Picker.Item label="daily" value="1" />
                    <Picker.Item label="weekly" value="7" />
                    <Picker.Item label="monthly" value="30" />
                 </Picker>
                <Text style = {styles.normalText}> fertilize ... </Text>
                <Picker
                    selectedValue={this.state.fertilize}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({fertilize:itemValue})}
                >
                    <Picker.Item label="daily" value="1" />
                    <Picker.Item label="weekly" value="7" />
                    <Picker.Item label="monthly" value="30" />
                 </Picker>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress = {() => 
                    this.finish(this.state.plantid, this.state.name, this.state.species, this.state.notes, 
                    this.state.water, this.state.fertilize, this.props.route.params.lat, this.props.route.params.long)}>
                    <Text style={styles.loginText}>add</Text>
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
    title:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fff",
        marginBottom:30,
        fontFamily: styling.mainFont,

    },
    normalText:{  
        fontWeight:"normal",
        fontSize:20,
        color:"#fff",
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
    longInputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:200,
        marginBottom:20,
        justifyContent: "flex-start",
        padding:20,
        fontFamily: styling.mainFont,
      },
    inputText:{
      height:30,
      color:"black",
      fontFamily: styling.mainFont,
    },
    addButton:{
      width:"80%",
      backgroundColor:styling.secondaryColor,
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      fontFamily: styling.mainFont,
    },
})