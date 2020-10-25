import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class ButtonTest extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.button1}>
                    <TouchableOpacity style={styles.button1} onPress = {() => this.props.navigation.navigate('Login')}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button2}>
                    <TouchableOpacity style={styles.button2} onPress = {() => this.props.navigation.navigate('Home')}>
                        <Text>Welcome</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#73db8d',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    button1: {
        flex: 1, 
        width:'25%',
        height: '15%',
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button2: {
        flex: 1,
        width:'25%',
        height: '15%',
        backgroundColor:"skyblue",
        alignItems: 'center',
        justifyContent: 'center',

    },
})