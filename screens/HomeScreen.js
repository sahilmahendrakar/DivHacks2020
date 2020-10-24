import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase'


export default class HomeScreen extends React.Component {
    state = {
        username:"",
        totalplants:"",
    }


    componentDidMount() {
        this.setUsernameRef();
        this.setPlantsRef();
    }


    setUsernameRef = () => {
        var usernameRef = firebase.database().ref('/users/' + this.props.route.params.uid + "/username");
        usernameRef.on('value', (snapshot) => {
            this.setState({
                username: snapshot.val()
            })
        });
    }

    setPlantsRef = () => {
        var totalPlantsRef = firebase.database().ref('plants/');
        totalPlantsRef.on('value', function(snapshot) {
            console.log(snapshot.val())
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Home, {this.state.username}</Text>
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
    title: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    }
})
