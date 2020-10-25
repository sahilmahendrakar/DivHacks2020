import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
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
        firebase.database().ref('plants/').push({
            title:name,
            name:name,
            species:species,
            description:notes,
            water:water,
            fertilize:fertilize,
            coordinate: {
                latitude: lat,
                longitude: long
              }
        });
        this.props.navigation.goBack();
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>   
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
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="watering interval in days" 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({water:text})}/>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="fertilizing interval in days" 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({fertilizer:text})}/>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress = {() => 
                        this.finish(this.state.plantid, this.state.name, this.state.species, this.state.notes, 
                        this.state.water, this.state.fertilize, this.props.route.params.params.lat, this.props.route.params.params.long)}>
                        <Text style={styles.normalText}>add</Text>
                    </TouchableOpacity>
            </SafeAreaView>
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
    scroll:{
        marginHorizontal: 10,
    },
    title:{
        // fontWeight:"bold",
        fontSize:35,
        color:"#fff",
        marginBottom:10,
        // flexGrow: 1,
        fontFamily: styling.mainFont,
        padding: 10,
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
      marginBottom:20,
      justifyContent:"center",
      padding:10,
      fontFamily: styling.mainFont,
      borderWidth: 0.5,
      borderRadius: 70,
      padding: 15,
      height: 60,
    },
    longInputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:150,
        marginBottom:20,
        justifyContent: "flex-start",
        padding:10,
        // flexGrow: 1,
        fontFamily: styling.mainFont,
      },
    inputText:{
      height:30,
      color:"black",
      fontFamily: styling.mainFont,
    },
    addButton:{
      backgroundColor:styling.secondaryColor,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      fontFamily: styling.mainFont,
      width:"80%",
      marginBottom:20,
      padding:20,
      fontFamily: styling.mainFont,
      borderWidth: 0.5,
      borderRadius: 70,
      padding: 15,
      height: 60,
    }
      
})