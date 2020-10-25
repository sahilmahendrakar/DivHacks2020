import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import {Picker} from '@react-native-community/picker';
import firebase from 'firebase'

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
                <Text style = {styles.normalText}> Water  ... </Text>
                <Picker
                    selectedValue={this.state.water}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({water:itemValue})}
                >
                    <Picker.Item label="Daily" value="1" />
                    <Picker.Item label="Weekly" value="7" />
                    <Picker.Item label="Monthly" value="30" />
                 </Picker>
                <Text style = {styles.normalText}> Fertilize ... </Text>
                <Picker
                    selectedValue={this.state.fertilize}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({fertilize:itemValue})}
                >
                    <Picker.Item label="Daily" value="1" />
                    <Picker.Item label="Weekly" value="7" />
                    <Picker.Item label="Monthly" value="30" />
                 </Picker>
                <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress = {() => 
                    this.finish(this.state.plantid, this.state.name, this.state.species, this.state.notes, 
                    this.state.water, this.state.fertilize, this.props.route.params.lat, this.props.route.params.long)}>
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