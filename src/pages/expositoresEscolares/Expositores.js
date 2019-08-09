import React, { Component } from 'react'
import { View, ScrollView, TouchableNativeFeedback, Image, Text, ImageBackground, Alert } from 'react-native'
import { setup } from 'axios-cache-adapter'
import axios from 'axios'
import Styles from './Styles'

class Palestrantes extends Component {

    constructor() {
        super();

        this.state = {
            expositores: []
        }
    }
    

    componentDidMount() {
        const url = this.props.navigation.getParam('type')
        setup({
            baseURL: url,
            cache: {
                maxAge: (24 * 60 * 60 * 1000)
            }
        })
        axios
        .get(url)
        .then(response => {
            const { listaExpositores } = response.data
            this.setState({
                expositores: listaExpositores
            })
        })
        .catch( function (error) {
            console.log(error);
            () => {}
        })
    }

    drawContent(expositor) {
        return (
            <TouchableNativeFeedback key={expositor._id} onPress={() => { this.props.navigation.navigate("DetalhesExpositores", expositor ) }}>
                <View style={Styles.expositor}>
                    <ImageBackground source={require('../../../assets/images/UserPic/UserPic.png')} style={Styles.image}>
                        <Image style={Styles.image} source={{uri: expositor.picture }} />
                    </ImageBackground>
                    <View>
                        <Text style={Styles.expositorNome}>{expositor.title.length < 31 ? expositor.title : `${expositor.title.substring(0,31)}...`}</Text>
                    </View> 
                </View>
            </TouchableNativeFeedback>
        )
    }

    render() {
        return (
            <View style={Styles.container}>

                <ScrollView style={Styles.wrapper}>
                    { this.state.expositores.map((expositor) => {
                        return this.drawContent(expositor)
                    })}
                </ScrollView>
                
            </View>
        )
    }
}

export default Palestrantes;