import React, { Component } from 'react'
import { View, ScrollView, TouchableNativeFeedback, Image, Text } from 'react-native'
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
        .get('http://www.json-generator.com/api/json/get/cfnxrNpuoO?indent=0')
        .then(response => {
            const { listaPalestrantes } = response.data
            this.setState({
                people: listaPalestrantes
            })
        })
    }

    drawContent(person) {
        return (
            <TouchableNativeFeedback key={person.nome} onPress={() => { this.props.navigation.navigate("DetalhesPalestrantes", person ) }}>
                <View style={Styles.palestrante}>
                    <Image style={Styles.image} source={{uri: person.picture }} />
                    <View>
                        <Text style={Styles.palNome}>{person.nome}</Text>
                        <Text>{person.instituicao}</Text>
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