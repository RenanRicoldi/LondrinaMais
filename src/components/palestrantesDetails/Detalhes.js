import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler';

class PalDetails extends Component {

    constructor(props) {
        super(props)
    }
    
    render(){

        const person = this.props.navigation.state.params;

        return (
        <ScrollView>
            <View>
                <View style={Styles.fundoImagem}></View>
                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: person.picture }} />
                    <Text style={Styles.nome}>{person.nome}</Text>
                    <Text style={Styles.instit}>{person.instituicao}</Text>
                </View>
            </View>
            <View style={Styles.sobreWrapper}>
                <View>
                    <Text style={Styles.sobreTitulo}>Sobre</Text>
                    <Text style={Styles.sobreConteudo}>{person.sobre}</Text>
                </View>
            </View>
            <View style={Styles.bordaContato}>
            <View style={Styles.contatoWrapper}>
                <Text style={Styles.contatoTitulo}>Contato</Text>
                <Text style={Styles.contatoEmail}>{person.email}</Text>
            </View>
            </View>

        </ScrollView>)
    }
}

export default PalDetails