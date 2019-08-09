import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import Styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler';

class ExpDetails extends Component {

    constructor(props) {
        super(props)
    }
    
    render(){

        const expositor = this.props.navigation.state.params
        if (expositor.picture === null){
            expositor.picture = require('../../../assets/images/UserPic/UserPic.png')
        }

        return (
        <ScrollView>
            <View>
                <View style={Styles.fundoImagem}></View>
                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: expositor.picture }} />
                    <Text style={Styles.nome}>{expositor.nome}</Text>
                    <Text style={Styles.instit}>{expositor.instituicao}</Text>
                </View>
            </View>
            <View style={Styles.sobreWrapper}>
                <View>
                    <Text style={Styles.sobreTitulo}>Sobre</Text>
                    <Text style={Styles.sobreConteudo}>{expositor.sobre}</Text>
                </View>
            </View>
            <View style={Styles.bordaContato}>
            <View style={Styles.contatoWrapper}>
                <Text style={Styles.contatoTitulo}>Contato</Text>
                <Text style={Styles.contatoEmail}>{expositor.email}</Text>
            </View>
            </View>
        </ScrollView>)
    }
}

export default ExpDetails