import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert} from 'react-native'
import Styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler';

class ExpDetails extends Component {

    constructor(props) {
        super(props)
    }

    displayPhone(expositor){
        return(
            Alert.alert(
                'Telefone',
                expositor.telefone,
                [
                    {text: 'Voltar'},
                    {text: 'Ligar'}
                ]
            )
        )
    }

    displayEmail(expositor){
        return(
            Alert.alert(
                'E-mail',
                expositor.email,
                [
                    {text: 'Voltar'},
                    {text: 'Enviar e-mail'}
                ]
            )
        )
    }

    displayFacebook(expositor){
        return(
            Alert.alert(
                'Facebook',
                expositor.facebook,
                [
                    {text: 'Voltar'}
                ]
            )
        )
    }

    showFacebook(expositor){
        if(!(expositor.facebook.length < 1))
            return(     
                <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle} onPress={() => this.displayFacebook(expositor)}>
                        <Image style={Styles.iconFacebook} source={require('../../../assets/icons/contact/facebook.png')}></Image>
                </TouchableOpacity>
            )
    }
    
    render(){

        const expositor = this.props.navigation.state.params

        return (
        <ScrollView>
            <View>
                <View style={Styles.fundoImagem}></View>
                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: expositor.picture}} />
                    <Text style={Styles.nome}>{expositor.title}</Text>
                </View>
            </View>

            <View style={Styles.btnWrapper}>
                    <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle} onPress={() => this.displayPhone(expositor)}>
                        <Image style={Styles.iconPhone} source={require('../../../assets/icons/contact/phone.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle} onPress={() => this.displayEmail(expositor)}>
                        <Image style={Styles.iconPhone} source={require('../../../assets/icons/contact/email.png')}></Image>
                    </TouchableOpacity>
                    {this.showFacebook(expositor)}
            </View>

            <View style={Styles.sobreWrapper}>
                <View>
                    <Text style={Styles.sobreTitulo}>Sobre</Text>
                    <Text style={Styles.sobreConteudo}>{expositor.sobre}</Text>
                </View>
            </View>
        </ScrollView>
        )
    }
}

export default ExpDetails