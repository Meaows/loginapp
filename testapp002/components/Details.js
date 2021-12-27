import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from "./MyButton"
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.presik = this.presik.bind(this)
}
presik() {
    this.props.navigation.navigate("s2")
}
render() {

    return (
        <View>
            <MyButton text="go back" funcion={this.presik}></MyButton>
            <Image style={css.image} source={require('../assets/user.png')} />
            <Text>id: {this.props.route.params.userdata.id}</Text>
            <Text>login: {this.props.route.params.userdata.login}</Text>
            <Text>password: {this.props.route.params.userdata.password}</Text>
            <Text>date: {this.props.route.params.userdata.date}</Text>
      </View>
    );
  }
}
let css = StyleSheet.create({
  image: {
    width: 150,
    height: 150,

    marginLeft: 20,
    marginRight: 20
},
})