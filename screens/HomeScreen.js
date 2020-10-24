import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Home, User</Text>
        </View>
    );
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

export default HomeScreen;