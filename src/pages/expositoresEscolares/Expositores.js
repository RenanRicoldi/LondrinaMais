import React, { Component } from 'react'
import { View, ScrollView, TouchableNativeFeedback, Image, Text, ImageBackground } from 'react-native'
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
        axios
        .get(url)
        .then(response => {
            const { listaExpositores } = response.data
            this.setState({
                expositores: listaExpositores
            })
        })
    }

    drawContent(expositor) {
        return (
            <TouchableNativeFeedback key={expositor.id} onPress={() => { this.props.navigation.navigate("DetalhesExpositoresEscolares", expositor ) }}>
                <View style={Styles.expositor}>
                    <ImageBackground source={require('../../../assets/images/UserPic/UserPic.png')} style={Styles.image}>
                        <Image style={Styles.image} source={{uri: expositor.picture }} />
                    </ImageBackground>
                    <View>
                        <Text style={Styles.expositorNome}>{expositor.nome.length < 31 ? expositor.nome : `${expositor.nome.substring(0,31)}...`}</Text>
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