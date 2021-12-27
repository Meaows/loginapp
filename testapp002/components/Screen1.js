import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import MyButton from "./MyButton"
import * as data from "../assets/ad.json"
const url = data.url

export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
        this.presik = this.presik.bind(this)
        this.handleLoginChange = this.handleLoginChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    async presik() {
        let add = url + "/add"
        await fetch(add, {
            headers: {       'Content-Type': 'application/json',
            'Accept': 'application/json'}, 
            method: 'POST',
            body: JSON.stringify({login: this.state.login, password: this.state.password})}).then((response) => {
                  if (response.status == 200) {
                     this.props.navigation.navigate('s2');
                  } else if (response.status == 401) {
                     alert("user exists");
                  }
                }).catch((error) => console.error(error))

                

    }
    handleLoginChange(login) {
        this.setState({ login: login })
    }
    handlePasswordChange(password) {
        this.setState({ password: password })
    }
    render() {
        return (
            <View>
                <View>
                    <Text>Register app</Text>
                </View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="login"
                    onChangeText={login => this.handleLoginChange(login)}
                    defaultValue={this.state.login}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="password"
                    onChangeText={password => this.handlePasswordChange(password)}
                    defaultValue={this.state.password}
                />
                <MyButton text="Register" funcion={this.presik}></MyButton>
            </View>
        );
    }
}
