import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import MyButton from "./MyButton"
import * as data from "../assets/ad.json"
import ListItem from './ListItem';
const url = data.url

export default class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.presik = this.presik.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.details = this.details.bind(this)
        this.delete = this.delete.bind(this)
    }
    async getUsers() {
        let get = url + "/users"
        let users = await fetch(get, {
            headers: {       'Content-Type': 'application/json',
            'Accept': 'application/json'}, 
            method: 'GET',}).then(res => res.json())
        console.log(users)
        this.setState({users: users})
        
    }
    presik() {
        this.props.navigation.navigate("s1")
    }
    async delete(id){
        let del = url + "/delete"
        await fetch(del, {
            headers: {       'Content-Type': 'application/json',
            'Accept': 'application/json'}, 
            method: 'POST',
            body: JSON.stringify({id: id})
        }).catch(err => {
            console.error(err);
        })


    }
    details(id){
        let userdata = {}
        for(let i = 0; i<this.state.users.length; i++){
            if(this.state.users[i].id == id){
                userdata = {
                    id: this.state.users[i].id,
                    login: this.state.users[i]. login,
                    password: this.state.users[i].password,
                    date: this.state.users[i].date
                }
                break;
           }

        }
        this.props.navigation.navigate("s3", {userdata: userdata})
    }
    render() {
        this.getUsers()
        let data = this.state.users
        return (
            <View>
                <MyButton text="go back" funcion={this.presik}></MyButton>
                <FlatList
                    data = {data}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => <ListItem details={this.details} delete={this.delete} id={item.id} login={item.login} password={item.password}></ListItem>}

                />
            </View>
        );
    }
}
