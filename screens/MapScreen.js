import React from 'react';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView 
            style={styles.mapStyle}
            initialRegion={{
                latitude: 33.7872131,
                longitude: -84.381931,
                latitudeDelta: .005,
                longitudeDelta: .005
            }} >
            <MapView.Marker
                coordinate={{ latitude: 33.7872131, longitude: -84.381931 }}
                title='Flatiron School Atlanta'
                description='This is where the magic happens!'>

                <Image source={require('../assets/PlantIcon.png')} style={styles.icon} />
            </MapView.Marker>
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
            title = "Click me" 
            onPress={() => console.log("button pressed")}
        >
            <Text style={styles.buttonText}>+</Text>
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
  }
});