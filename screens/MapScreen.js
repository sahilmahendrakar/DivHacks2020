import React from 'react';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';
import firebase from 'firebase'

const word1 = "+";
const word2 = "check";
const plantImage = "../assets/PlantIcon.png";

var sampleMarkers = [
  {
    key: 1,
    title: "hello1",
    coordinates: {
      latitude: 33.8,
      longitude: -84.4,
    },
    description: "desc1"
  },
  {
    key: 2,
    title: "hello2",
    coordinates: {
      latitude: 33.5,
      longitude: -84.2,
    },
    description: "desc2"
  }
]; 

export default class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = { 
      plantProfOpen: false,
      buttonWord: word1,
      markers: sampleMarkers,
      region: {
        latitude: 33.7872131,
        longitude: -84.381931,
        latitudeDelta: .4,
        longitudeDelta: .4},
      dummyOpacity: 0
    };
  }

  setPlantsRef = () => {
    var totalPlantsRef = firebase.database().ref('plants/');
    totalPlantsRef.on('value', function(snapshot) {
        console.log(snapshot.val())
    });
  }

  onRegionChange = region => {
    this.setState({
      region
    })
  }

  onPress = () => {
      if(! this.state.plantProfOpen) {
        // <View style={styles.markerFixed}>
        //   <Image source={require('../assets/PlantIcon.png')} style={styles.icon} />
        // </View>

        // this.state.markers.push({
        //   key: 3,
        //   title: "hello3",
        //   coordinates: {
        //     latitude: 33.55,
        //     longitude: -84.25,
        //   },
        //   description: "desc3"
        // });

        this.setState({ 
          plantProfOpen: true,
          buttonWord: word2,
          dummyOpacity: 0.5
        });

     } else {

        // this.state.markers.push({
        //   key: 3,
        //   title: "hello3",
        //   coordinates: {
        //     latitude: this.region.coordinates.latitude,
        //     longitude: this.region.coordinates.longitude,
        //   },
        //   description: "desc3"
        // });

        this.setState({ 
            plantProfOpen: false,
            buttonWord: word1,
            markers: this.state.markers,
            dummyOpacity: 0
        });
    }
    
  };



  render() {
    const {buttonWord} = this.state;
    const {region} = this.state;
    const {dummyOpacity} = this.state;

    return (
      <View style={styles.container}>
        <MapView 
            style={styles.mapStyle}
            initialRegion={region}
            >
            {/* dummy plant for dropping pins */}
            <View 
              style={{
                left: '50%',
                marginLeft: -24,
                marginTop: -48,
                position: 'absolute',
                top: '50%',
                opacity: this.state.dummyOpacity
              }} 
              >
              <Image source={require(plantImage)} style={styles.icon} />
            </View>
            

            {this.state.markers.map((marker, index) => (
              <MapView.Marker
                index={marker.key}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}>
                <Image source={require(plantImage)} style={styles.icon} />
              </MapView.Marker>
            ))}

        </MapView>
            
        <View style={styles.mapHeader}>
            {/* <SafeAreaView style={styles.mapHeader}> */}
            <Text style={styles.headerText}>
                Find a Plant! 
            </Text>
            {/* </SafeAreaView> */}
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    // flexDirection:'row',
    position:'absolute',
    bottom: 50,
    right: 40,
    alignSelf: "center",
    backgroundColor: "darkgreen",
    borderWidth: 0.5,
    borderRadius: 70,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText:{
    fontSize: 50,
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 36,
    top: 15,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: 'darkgreen',

  },
  mapStyle: {
    backgroundColor: "black",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapHeader: {
    backgroundColor: '#73db8d',
    height: 100,
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf:  "baseline"
  },
  // markerFixed: {
  //   left: '50%',
  //   marginLeft: -24,
  //   marginTop: -48,
  //   position: 'absolute',
  //   top: '50%',
  //   opacity: dummyOpacity
  // }
});