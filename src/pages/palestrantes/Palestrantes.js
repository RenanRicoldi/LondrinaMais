import React, { Component } from 'react'
import { View, ScrollView, TouchableNativeFeedback, Image, Text, ImageBackground } from 'react-native'
import axios from 'axios'
import Styles from './Styles'

class Palestrantes extends Component {

    constructor() {
        super();

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios
        .get('http://ieeeuel.org/_functions/api/lndmais-palestrantes')
        .then(response => {
            const { listaPalestrantes } = response.data
            this.setState({
                people: listaPalestrantes
            })
        })
    }

    drawContent(person) {
        return (
            <TouchableNativeFeedback key={person._id} onPress={() => { this.props.navigation.navigate('DetalhesPalestrantes', person )}}>
                <View style={Styles.palestrante}>
                    <ImageBackground source={require('../../../assets/images/UserPic/UserPic.png')} style={Styles.image}>
                        <Image style={Styles.image} source={{uri: person.picture }} />
                    </ImageBackground>
                    <View>
                        <Text style={Styles.palNome}>{person.title}</Text>
                        <Text style={Styles.palInstituicao}>{person.instituicao}</Text>
                    </View> 
                </View>
            </TouchableNativeFeedback>
        )
    }

    render() {
        return (
            <View style={Styles.container}>

                <ScrollView style={Styles.wrapper}>
                    { this.state.people.map((person) => {
                        return this.drawContent(person)
                    })}
                </ScrollView>
                
            </View>
        )
    }
}

export default Palestrantes;