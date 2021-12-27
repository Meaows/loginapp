import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from "./MyButton"
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.detal = this.detal.bind(this)
        this.delete = this.delete.bind(this)
    }
    detal() {
        this.props.details(this.props.id)
    }
    delete(){
        this.props.delete(this.props.id)
    }
    render() {
        return (
            <View style={css.left}>
                <View style={css.left}>
                    <Image style={css.image} source={require('../assets/user.png')} />
                    <Text> {this.props.id} - {this.props.login} : {this.props.password} </Text>
                </View>

                <View style={css.right}>
                    <MyButton text="details" funcion={this.detal}/>
                    <MyButton text="delete" funcion={this.delete}/>
                </View>
            </View>
        );
    }
}
const css = StyleSheet.create({
    image: {
        width: 50,
        height: 50,

        marginLeft: 20,
        marginRight: 20
    },
    left:{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    right:{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: "center",
            flexDirection: 'row'
    },
    
})
