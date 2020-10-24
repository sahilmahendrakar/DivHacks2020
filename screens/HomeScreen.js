import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class HomeScreen extends React.Component {
    componentDidMount() {
        console.log(this.props.route.params);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Home, Bob</Text>
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
