import React, {Component} from 'react'
import { ActivityIndicator, View, StyleSheet } from "react-native";
import firebase from 'firebase'

class LoadingScreen extends Component {
    state = {  }

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }

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
        backgroundColor: '#73db8d',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default LoadingScreen;