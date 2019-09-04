import React, { Component } from 'react'
import { View, TouchableNativeFeedback, Image, Text, ImageBackground, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import Styles from './Styles'

class Palestrantes extends Component {

    constructor() {
        super();

        this.state = {
            people: [],
            loading: true,
            done: true
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios
        .get('https://ieeeuel.org/_functions/api/lndmais-palestrantes')
        .then(response => {
            const { listaPalestrantes } = response.data
            this.setState({
                people: listaPalestrantes,
                loading: false,
                done: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false, done: false})
        })
    }

    render() {
        if( !this.state.loading && this.state.done ){
            return(
                <View style={Styles.container}>
                    <Text style={Styles.textoTopo}>Toque no card para ver mais informações</Text>
                    <FlatList styles = { Styles.wrapper } data={ this.state.people } renderItem={({ item }) => (
                        <TouchableNativeFeedback key={item._id} onPress={() => { this.props.navigation.navigate("DetalhesPalestrantes", item ) }}>
                            <View style={Styles.palestrante}>
                                <ImageBackground source={require('../../../assets/images/UserPic/UserPic.png')} style={Styles.image}>
                                    <Image style={Styles.image} source={{uri: imageURL(item.foto) }} />
                                </ImageBackground>
                                <View style={Styles.textWrap}>
                                    <Text style={Styles.palNome}>{item.title}</Text>
                                    <Text style={Styles.palInstituicao}>{item.instituicao}</Text>
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

export default Palestrantes;