import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, DatePickerIOS, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { POST } from '../api/registerPost';
import { NavigationActions } from 'react-navigation';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
            responseFromApi: '',
            birthDay: new Date(),
        }
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ birthDay: newDate })
    }

    handleChangeTextInput(state, value) {
        this.setState({ [state]: value })
    }

    sendRegisterUser() {
        let data = {
            email: this.state.email,
            password: this.state.password
        }


        POST.registerUser(data, (error, success) => {
            console.log(success)
            if (!error) {
                if (success.code == 200) {
                    let user = success.message.user.email;
                    AsyncStorage.setItem('user', user);
                    AsyncStorage.setItem('route', 'ElderlyRegister');
                    this.props.navigation.navigate('Videos');
                }
            } else {
                throw error;
            }
        })
    }
    w
    render() {
        
        return (
            <View style={styles.container}>

                <Text style={{ color: "#6ac4bb" }}> Digite os dados abaixo para efetuar o cadastro: </Text>
                <View style={styles.inputWrap}>
                    <TextInput
                        placeholderTextColor="#6ac4bb"
                    
                        style={styles.input}
                        onChangeText={(email) => this.handleChangeTextInput('email', email)}
                        placeholder="Email"
                        value={this.state.email}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(password) => this.handleChangeTextInput('password', password)}
                        placeholder="Senha"
                        placeholderTextColor="#6ac4bb"
                        value={this.state.password}
                    />
                </View>
                <View style={styles.buttons}>
                    <Button
                        onPress={() => this.sendRegisterUser()}
                        title="Ok"
                        color="#6ac4bb"
                    />
                    <Button
                        onPress={() => this.props.navigation.goBack(null)}
                        title="Back"
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
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 8,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#6ac4bb"
    },
    wrapper: {
        paddingVertical: 30,
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color: '#FFF'
    }
});

export default StackNavigator({
    Register: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => ({
            header: false
        }),
    },

});
