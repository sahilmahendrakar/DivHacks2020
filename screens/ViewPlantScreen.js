import React from 'react';
import firebase from 'firebase'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import styling from '../config/styling';

const NAME = "sidewalk sunflower";
const THISSPECIES = "sunflower";
const THISNOTES = "Keep your face to the sunshine, and you cannot see the shadows. It's what the sunflowers do. \n- Hellen Keller";
const THISWATERING = "3";
const THISFERTILIZING = "10"


export default class ViewPlant extends React.Component {
  state={

  }

  render(){
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>{this.props.route.params.name}</Text>

        <View style={styles.two} >
            <View style={styles.firstHalf}>
                <Text style={styles.headings}>
                    species:
                </Text>  
            </View>

            <View style={styles.secondHalf}>
                <Text style={styles.description}> {this.props.route.params.species}</Text>
            </View>
        </View>

        <View style={styles.two} >
            <View style={styles.firstHalf}>
                <Text style={styles.headings}>
                    notes:
                </Text>  
            </View>

            <View style={styles.secondHalfLong}>
                <Text style={styles.description}> {this.props.route.params.notes}</Text>
            </View>
        </View>

        <View style={styles.two} >
            <View style={styles.firstHalf}>
                <Text style={styles.headings}>
                    watering interval 
                    <Text style={{fontWeight: 'normal'}}> {"\n"}(in days):</Text>
                </Text>  
            </View>

            <View style={styles.secondHalf}>
                <Text style={styles.description}> {this.props.route.params.water}</Text> 
            </View>
        </View>

        <View style={styles.two} >
            <View style={styles.firstHalf}>
                <Text style={styles.headings}>
                    fertilizing interval
                    <Text style={{fontWeight: 'normal'}}> {"\n"}(in days):</Text>
                </Text>  
            </View>

            <View style={styles.secondHalf}>
                <Text style={styles.description}> {this.props.route.params.fertilize}</Text> 
            </View>
        </View>


        <TouchableOpacity activeOpacity={0.8} style={styles.addButton} onPress = {() => this.props.navigation.navigate("Maps") }>
            <Text style={styles.normalText}>done</Text>
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
  },
  title: {
    fontSize:35,
    color:"#fff",
    marginBottom:10,
    fontFamily: styling.mainFont,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  addButton:{
    backgroundColor:styling.secondaryColor,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
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
  },
  normalText:{  
    fontWeight:"normal",
    fontSize:20,
    color:"#fff",
    fontFamily: styling.mainFont,
    },
  headings: {
    fontWeight: "bold",
    fontSize:20,
    color: styling.secondaryColor,
    fontFamily: styling.mainFont,
    textAlign: "left",
  },
  description: {
    fontWeight: "normal",
    fontSize:20,
    color: 'white',
    fontFamily: styling.mainFont,
    textAlign: "right",
  },
  inputView:{
    width:"80%",
    backgroundColor:styling.primaryColor,
    justifyContent:"center",
    alignContent: "center",
    fontFamily: styling.mainFont,
    padding: 15,
  },
  two: {
    flexDirection: 'row',
    width:"80%",
    backgroundColor:styling.primaryColor,
    justifyContent:"center",
    alignContent: "center",
    fontFamily: styling.mainFont,
    padding: 15,
  },
  firstHalf: {
    flexGrow: 0.6,
  },
  secondHalf: {
    flex: 0.4,
  },
  secondHalfLong:{
    flex: 20, 
  }
});