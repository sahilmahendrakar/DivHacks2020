import React, {Component} from 'react'
import { ActivityIndicator, View, StyleSheet } from "react-native";
import firebase from 'firebase'

import styling from '../config/styling';

class LoadingScreen extends Component {
    state = {  }

    /**componentDidMount() {
        this.checkIfLoggedIn();
    }

    /**checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {

            if(user){
                firebase.database().ref('/users/' + user.uid).once('value').then((snapshot) => {
                    if(!snapshot.exists()) {
                        this.props.navigation.navigate('FillName', {uid: user.uid});
                    } else {
                        this.props.navigation.navigate('Home', {screen: 'HomeScreen', params: {uid: user.uid}});
                    }
                }, function(error) {
                    console.log(error)
                });

            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }
    **/
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size = "large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: styling.primaryColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: styling.mainFont,
    }
})

export default LoadingScreen;