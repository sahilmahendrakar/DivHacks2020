
import React from 'react';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { add, ceil } from 'react-native-reanimated';
import firebase from 'firebase'

import styling from '../config/styling';

const word1 = "add a plant";
const word2 = "confirm placement";
const plantImage = "../assets/PlantIcon.png";
const headerWords = "plant finder"
const plantSize = 50;
// var count = 0;

var sampleMarkers = [
  {
    key: 1,
    title: "hello1",
    coordinate: {
      latitude: 33.8,
      longitude: -84.4,
    },
    description: "desc1"
  },
  {
    key: 2,
    title: "hello2",
    coordinate: {
      latitude: 33.5,
      longitude: -84.2,
    },
    description: "desc2"
  }
]; 

export default class MapScreen extends React.Component {

  // setPlantsRef = () => {
  //   var totalPlantsRef = firebase.database().ref('plants/');
  //   totalPlantsRef.on('value', function(snapshot) {
  //       console.log(snapshot.val());
  //       markers = snapshot.val();
  //   });
  // }
  
  // addPlant = (plantid, name, species, notes, water, fertilize, lat, long) => {
  //   firebase.database().ref('plants/' + plantid).set({
  //       plantid:plantid,
  //       name:name,
  //       species:species,
  //       notes:notes,
  //       water:water,
  //       fertilize:fertilize,
  //       lat:lat, 
  //       long:long
  //   });
  //   count++;
  // }

  constructor(props) {
    super(props);
    // addPlant(count, "planty mcplant", "tomato", "i love to eat tomatoes", "every day", "once a week", "33.8", "-84.4");
    // addPlant(count, "planty mcplant 2.0", "carrot", "i love to eat carrots", "twice a day", "twice a week", "33.5", "-84.2");
    this.state = { 
      plantProfOpen: false,
      buttonWord: word1,
      markers: sampleMarkers,
      region: {
          latitude: 40.804496782,
          longitude: -73.957162838,
          latitudeDelta: .004,
          longitudeDelta: .004},
      dummyOpacity: 0,
      process: false,
    };
    this.itemsRef = firebase.database().ref('plants/');
    
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      this.setState({
        process:true
      })
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          key: child.key,
          name: child.val().name,
          species: child.val().species,
          description: child.val().description,
          water:child.val().water,
          fertilize:child.val().fertilize,
          coordinate:child.val().coordinate
        });
      });

      this.markers = items;

      this.setState({
        markers: this.markers
      });
      this.setState({
        process:false
      })
    });
  }

  onRegionChange = region => {
    this.setState({
      region
    })
  }

    onPress = () => {
      if(! this.state.plantProfOpen) {
        this.setState({ 
          plantProfOpen: true,
          buttonWord: word2,
          dummyOpacity: 0.5,
          // markers: this.state.markers
        });

    } else {
      this.props.navigation.navigate("NewPlant", {screen: 'Settings', params: {lat:this.state.region.latitude, long:this.state.region.longitude}});

      this.setState({ 
          plantProfOpen: false,
          buttonWord: word1,
          dummyOpacity: 0,
          // markers: this.state.markers

      });
    }

  };
  onCalloutPress = (marker) =>{
    // console.log(marker,this.state.process);
    if (!this.state.process){
      this.props.navigation.navigate("ViewPlant", {name:marker.name,species:marker.species, description:marker.description,water:marker.water,fertilize:marker.fertlize});
    }
  }

  componentDidMount() {
    let isMounted = true; 
    if (isMounted) {
      this.setState({
        markers: this.state.markers
      })
    }
    this.listenForItems(this.itemsRef);
    return () => { isMounted = false };
  }

  render() {
    var {buttonWord} = this.state;
    var {region} = this.state;
    var {dummyOpacity} = this.state;
    var {markers} = this.state;

    return (
      <View style={styles.container}>
        <MapView 
            style={styles.mapStyle}
            initialRegion={region}
            onRegionChangeComplete={this.onRegionChange}
            >

            {this.state.markers.map((marker, key) => (
              <MapView.Marker
                key={marker.key}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
                >
                <Image source={require("../assets/PlantIcon.png")} style={styles.icon} />
                <MapView.Callout
                    style={styles.callout}
                    onPress={()=>this.onCalloutPress(marker)}
                  >
                    <View>
                      <Text>{marker.name}{"\n"}{marker.description}</Text>
                    </View>
                  </MapView.Callout>
              </MapView.Marker>
            ))}

        </MapView>

        {/* dummy plant for dropping pins */}
        <View 
              style={{
                left: '49.5%',
                marginLeft: -24,
                marginTop: -48,
                position: 'absolute',
                top: '53.5%',
                opacity: this.state.dummyOpacity
              }} 
              >
              <Image source={require(plantImage)} style={styles.icon} />
            </View>
            
        <View style={styles.mapHeader}>
            <Text style={styles.headerText}>
                Find a Plant! 
            </Text>
        </View>

        <TouchableOpacity 
            style = {styles.button} 
            onPress={this.onPress} >
                <Text style={styles.buttonText}>{buttonWord}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: styling.mainFont,
  },
  button: {
    position:'absolute',
    bottom: 50,
    right: 30,
    alignSelf: "flex-start",
    backgroundColor: styling.primaryColor,
    borderWidth: 0.5,
    borderRadius: 70,
    padding: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: styling.mainFont,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: styling.mainFont,
  },
  headerText: {
    color: "#fff",
    fontSize: 36,
    top: 15,
    fontFamily: styling.mainFont,
  },
  icon: {
    width: plantSize,
    height: plantSize,
    tintColor: styling.primaryColor,

  },
  mapStyle: {
    backgroundColor: "black",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapHeader: {
    backgroundColor: styling.primaryColor,
    height: 100,
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf:  "baseline",
    fontFamily: styling.mainFont,
  }
});