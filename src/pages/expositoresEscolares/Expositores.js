import React, { Component } from 'react'
import { View, FlatList, TouchableNativeFeedback, Image, Text, ActivityIndicator } from 'react-native'
import { setup } from 'axios-cache-adapter'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import Styles from './Styles'

class Expositores extends Component {

    constructor() {
        super();

        this.state = {
            expositores: [],
            loading: true,
            done: true
        }
    }
    

    componentDidMount() {
        this.setState({loading: true})
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
                loading: false,
                done: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({done: false, loading: false})
        })
    }

    render() {
        if( !this.state.loading && this.state.done ){
            return(
                <View style={Styles.container}>
                    <Text style={Styles.textoTopo}>Toque no card para ver mais informações</Text>
                    <FlatList styles = { Styles.wrapper } data={ this.state.expositores } renderItem={({ item }) => (
                        <TouchableNativeFeedback key={item._id} onPress={() => { this.props.navigation.navigate("DetalhesExpositores", item ) }}>
                            <View style={Styles.expositor}>
                                <Image style={Styles.image} source={{uri: imageURL(item.foto) }} resizeMode='center'/>
                                <View style={Styles.textWrap}>
                                    <Text style={Styles.expositorNome}>{item.title}</Text>
                                </View> 
                            </View>
                        </TouchableNativeFeedback>
                    )}
                    keyExtractor = {item => item._id} />
                </View>
            )
        } else if ( !this.state.loading && !this.state.done ) {
            return(
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#97DB4F', flex: 1 }}>
                    <Text style={ { fontSize: 15 }}>Não foi possível baixar os dados</Text>
                    <Text style={{ fontSize: 20 }}>Cheque sua internet</Text>  
                </View>
            )
        } else if ( this.state.loading ){
            return(
                <View style={[Styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#d9d9d9' />
                </View>
            )
        }
    }
}

export default Expositores;