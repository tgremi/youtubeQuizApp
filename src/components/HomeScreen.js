import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {

    componentWillUnmount() {
        console.log('componentWillUnmount()');

    }

    componentDidMount() {
        console.log('componentDidMount() home')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: "#6ac4bb", fontSize: 56 }}> Youtube Quiz </Text>
                <View style={styles.buttons}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Login')}
                        title="Login"
                        color="#6ac4bb"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title="Register"
                        color="#6ac4bb"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttons: {
        marginTop: 20,
        marginBottom: 5,
    },
});
export default HomeScreen
    // StackNavigator({
    //     Home: {
    //         screen: HomeScreen,
    //         navigationOptions: ({ navigation }) => ({
    //             header: false
    //         }),

    //     },

    // });
