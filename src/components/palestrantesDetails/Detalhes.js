import React, { Component } from 'react'
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler';

class PalDetails extends Component {

    constructor(props) {
        super(props)
    }

    formatEmail(person){
        if(person.contato.length > 1)
            return(person.contato)
        else
            return('Esse palestrante não informou um e-mail para contato')
    }

    displayPhone(person){
        return(
            Alert.alert(
                'Envie um e-mail',
                this.formatEmail(person),
                [
                    {text: 'Voltar'},
                    {text: 'Enviar'}
                ]
            )
        )
    }
    
    render(){

        const person = this.props.navigation.state.params

        return (
        <ScrollView>
            <View>
                <View style={Styles.fundoImagem}></View>
                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: person.picture }} />
                    <Text style={Styles.nome}>{person.title}</Text>
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
            <TouchableOpacity activeOpacity={0.8} style={Styles.contatoWrapper} onPress={() => this.displayPhone(person)}>
                <Image style={Styles.iconEmail} source={require('../../../assets/icons/contact/email.png')}></Image>
                <Text style={Styles.contatoTitulo}>Entrar em contato</Text>
            </TouchableOpacity>
            </View>

        </ScrollView>)
    }
}

export default PalDetails