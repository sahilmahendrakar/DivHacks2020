import React from 'react';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { add, ceil } from 'react-native-reanimated';
import firebase from 'firebase'

const word1 = "+";
const word2 = "check";
const plantImage = "../assets/PlantIcon.png";
const plantSize = 50;
var count = 0;

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
        latitude: 33.7872131,
        longitude: -84.381931,
        latitudeDelta: .4,
        longitudeDelta: .4},
      dummyOpacity: 0
    };
    this.itemsRef = firebase.database().ref('plants/');

    this.itemsRef.push({
      title: 'hello 1',
      name: 'planty mcplant 1.0',
      species: 'sunflower',
      notes: 'hello i like to eat sunflowers',
      water: 'half a day',
      fertilize: 'half a week ',
      coordinate: {
        latitude: -34,
        longitude: -84
      }
    })
    
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        console.log(child.val().name);
        items.concat({
          title: child.val().title,
          key: child.key,
          name: child.val().name,
          species: child.val().species,
          notes: child.val().notes,
          water:child.val().water,
          fertilize:child.val().fertilize,
          coordinate:child.val().coordinate
        });
      });

      this.setState({
        markers: items
      });

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
          markers: this.state.markers
        });

     } else {
      // this.addPlant(count, "planty mcplant 3.0", "cucumber", "i love to eat cucumbers", "three times a day", "thrice a week", this.state.region.latitude, this.state.region.longitude)

      this.itemsRef.push({
        title: 'hello',
        name: 'planty mcplant 3.0',
        species: 'cucumber',
        notes: 'hello i like to eat cucumbers',
        water: 'thrice a day',
        fertilize: 'thrice a week ',
        coordinate: {
          latitude: this.state.region.latitude,
          longitude: this.state.region.longitude
        }
      })

      console.log('3.0')

      // this.state.markers.push({
      //   key: 3,
      //   title: "hello3",
      //   coordinates: {
      //     latitude: this.state.region.latitude,
      //     longitude: this.state.region.longitude ,
      //   },
      //   description: "desc3"
      // });

      // finish = (name, location) => {
      //   firebase.database().ref('plants/' + name).set({
      //       name: name,
      //       location: location,
      //   });
      // }

      this.setState({ 
          plantProfOpen: false,
          buttonWord: word1,
          dummyOpacity: 0,
          
      });
    }
    
  };

  componentDidMount() {
    // this.setState({
    //   markers: this.state.markers
    // })
    this.listenForItems(this.itemsRef);
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

            {this.state.markers.map((marker) => (
              <MapView.Marker
                key={marker.key}
                coordinate={marker.coordinate}
                title={marker.name}
                description={marker.notes}
                >
                <Image source={require(plantImage)} style={styles.icon} />
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
    width: plantSize,
    height: plantSize,
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