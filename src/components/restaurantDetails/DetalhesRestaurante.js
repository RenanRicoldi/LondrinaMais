import React, {Component} from 'react'
import {View,
        Text,
        Image,
        ScrollView,
        TouchableOpacity,
        Alert} from 'react-native'
import Styles from './Styles'
import { imageURL } from '../../utils/ImageURL'
import { phonecall } from 'react-native-communications'

class DetalhesRestaurantes extends Component {

    constructor(props) {
        super(props)
    }

    displayPhone(rst){
        return(
            Alert.alert(
                'Telefone',
                rst.telefone,
                [
                    {text: 'Voltar'},
                    {text: 'Ligar', onPress: () => phonecall(rst.telefone, true)}
                ]
            )
        )
    }

    render(){

        const rst = this.props.navigation.state.params;

        return (
            <ScrollView>
                <View style={Styles.fundoImagem}></View>

                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: imageURL(rst.foto) }}></Image>
                    <Text style={Styles.nomeRestaurante}>{rst.title}</Text>
                    <Text style={Styles.local}>{rst.local}</Text>
                </View>

                <View style={Styles.btnWrapper}>
                    <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle} onPress={() => this.displayPhone(rst)}>
                        <Image style={Styles.iconPhone} source={require('../../../assets/icons/contact/phone.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View style={Styles.bordaCardapio}>
                <View style={Styles.wrapperCardapio}>
                    <Text style={Styles.tituloCardapio}>Cardápio</Text>
                    <Text style={Styles.conteudoCardapio}>{rst.cardapio}</Text>
                </View>
                </View>

                <View>
                    <Image style={Styles.iconeAlimentacao} source={require('../../../assets/icons/alimentacao/alimentacao.png')}></Image>
                </View>

                


            </ScrollView>
        )
    }

}

export default DetalhesRestaurantes