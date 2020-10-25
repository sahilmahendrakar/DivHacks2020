import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
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
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Watering Interval in days" 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({water:text})}/>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Fertilizing Interval in days" 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({fertilizer:text})}/>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress = {() => 
                        this.finish(this.state.plantid, this.state.name, this.state.species, this.state.notes, 
                        this.state.water, this.state.fertilize, this.props.route.params.params.lat, this.props.route.params.params.long)}>
                        <Text style={styles.normalText}>Add!</Text>
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
    scroll:{
        marginHorizontal: 10,
    },
    title:{
        fontWeight:"bold",
        fontSize:30,
        color:"#fff",
        marginBottom:30,
        flexGrow: 1
    },
    normalText:{  
        fontWeight:"normal",
        fontSize:20,
        color:"#fff",
    },
    inputView:{
      width:"80%",
      backgroundColor:"#fff",
      borderRadius:25,
      height:"7%",
      marginBottom:20,
      justifyContent:"center",
      padding:10,
      flexGrow: 1
    },
    longInputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:"20%",
        marginBottom:20,
        justifyContent: "flex-start",
        padding:10,
        flexGrow: 1
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
      flexGrow: 1
    }
})