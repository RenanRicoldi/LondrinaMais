import React, { Component } from 'react'
import { View, ScrollView, TouchableNativeFeedback, Image, Text, ImageBackground } from 'react-native'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import Styles from './Styles'

class Palestrantes extends Component {

    constructor() {
        super();

        this.state = {
            people: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
        .get('https://ieeeuel.org/_functions/api/lndmais-palestrantes')
        .then(response => {
            const { listaPalestrantes } = response.data
            this.setState({
                people: listaPalestrantes,
                loading: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false})
        })
    }

    drawContent(person) {
        return (
            <TouchableNativeFeedback key={person._id} onPress={() => { this.props.navigation.navigate('DetalhesPalestrantes', person )}}>
                <View style={Styles.palestrante}>
                    <ImageBackground source={require('../../../assets/images/UserPic/UserPic.png')} style={Styles.image}>
                        <Image style={Styles.image} source={{uri: imageURL(person.foto) }} />
                    </ImageBackground>
                    <View style={Styles.textWrap}>
                        <Text style={Styles.palNome}>{person.title}</Text>
                        <Text style={Styles.palInstituicao}>{person.instituicao}</Text>
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
    
                        { this.state.people.map((person) => {
                            return this.drawContent(person)
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