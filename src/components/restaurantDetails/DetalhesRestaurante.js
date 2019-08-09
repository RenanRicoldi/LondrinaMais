import React, {Component} from 'react'
import {View,
        Text,
        Image,
        ScrollView,
        TouchableOpacity,
        Alert} from 'react-native'
import Styles from './Styles'
import { phonecall, email } from 'react-native-communications'

let testImage = 'https://static.wixstatic.com/media/4fd224_4bbc412bc5dd4a10b2dc6d5fa534f2d3~mv2.jpg/v1/fit/w_139,h_95/4fd224_4bbc412bc5dd4a10b2dc6d5fa534f2d3~mv2.jpg'

class DetalhesRestaurantes extends Component {

    constructor(props) {
        super(props)
    }

    displayPhone(rst){
        return(
            Alert.alert(
                'Telefone',
                rst.phone
            )
        )
    }

    render(){

        const rst = this.props.navigation.state.params;

        return (
            <ScrollView>
                <View style={Styles.fundoImagem}></View>

                <View style={Styles.imageWrapper}>
                    <Image style={Styles.image} source={{uri: testImage }}></Image>
                    <Text style={Styles.nomeRestaurante}>{rst.nome}</Text>
                    <Text style={Styles.local}>{rst.local}</Text>
                </View>

                <span itemprop="telephone">
                    <Text href="tel:25266896">+55 (31) 2526-6896</Text>
                </span>

                <View style={Styles.btnWrapper}>
                    <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle} onPress={() => this.displayPhone(rst)}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle}></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={Styles.btnStyle}></TouchableOpacity>
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