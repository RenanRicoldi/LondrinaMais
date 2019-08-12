import React, { Component } from 'react'
import { View, ScrollView, TouchableNativeFeedback, Image, Text, ImageBackground, Alert } from 'react-native'
import { setup } from 'axios-cache-adapter'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import Styles from './Styles'

class Palestrantes extends Component {

    constructor() {
        super();

        this.state = {
            expositores: [],
            loading: true
        }
    }
    

    componentDidMount() {
        const url = this.props.navigation.getParam('type')
        setup({
            baseURL: url,
            cache: {
                maxAge: (24 * 60 * 60 * 1000)
            }
        })
        axios
        .get(url)
        .then(response => {
            const { listaExpositores } = response.data
            this.setState({
                expositores: listaExpositores,
                loading: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false})
        })
    }

    drawContent(expositor) {
        return (
            <TouchableNativeFeedback key={expositor._id} onPress={() => { this.props.navigation.navigate("DetalhesExpositores", expositor ) }}>
                <View style={Styles.expositor}>
                    <Image style={Styles.image} source={{uri: imageURL(expositor.foto) }} resizeMode='center'/>
                    <View style={Styles.textWrap}>
                        <Text style={Styles.expositorNome}>{expositor.title}</Text>
                    </View> 
                </View>
            </TouchableNativeFeedback>
        )
    }

    render() {
        if(this.state.loading === true){
            return (
                <View style={Styles.container}>
    
    
                    <ScrollView style={Styles.wrapper}>
    
                        <Text style={Styles.textoTopo}>Toque no card para ver mais informações</Text>
    
                        { this.state.expositores.map((expositor) => {
                            return this.drawContent(expositor)
                        })}
                    </ScrollView>
                    
                </View>
            )
        } else {
            return(
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#97DB4F', flex: 1 }}>
                    <Text style={ { fontSize: 15 }}>Não foi possível baixar os dados</Text>
                    <Text style={{ fontSize: 20 }}>Cheque sua internet</Text>  
                </View>
            )
        }
    }
}

export default Palestrantes;