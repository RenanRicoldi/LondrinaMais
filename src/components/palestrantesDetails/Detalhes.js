import React, { Component } from 'react'
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler'
import { email } from 'react-native-communications'
import { imageURL } from '../../utils/ImageURL'

class PalDetails extends Component {

    constructor(props) {
        super(props)
    }

    displayPhone(person){
        if(person.contato.length > 1){
            return(
                Alert.alert(
                    'Envie um e-mail',
                    person.contato,
                    [
                        {text: 'Voltar'},
                        {text: 'Enviar', onPress: () => email([person.contato],null,null,'Palestra do Londrina Mais','')}
                    ],
                    {cancelable: true}
                )
            )
        }else{
            return(
                Alert.alert(
                    'Envie um e-mail',
                    'Esse palestrante não informou um e-mail para contato',
                    [
                        {text: 'Voltar'},
                    ],
                    {cancelable: true}
                )
            )
        }
    }
    
    render(){

        const person = this.props.navigation.state.params

        return (
        <ScrollView>
            <View>
                <View style={Styles.fundoImagem}></View>
                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: imageURL(person.foto) }} />
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