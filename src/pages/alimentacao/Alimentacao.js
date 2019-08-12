import React, {Component} from 'react'
import {View,
        Text,
        ScrollView,
        Image,
        TouchableNativeFeedback} from 'react-native'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import Styles from './Styles'

class Alimentacao extends Component {

    constructor() {
        super();

        this.state = {
            restaurantes: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
        .get('http://ieeeuel.org/_functions/api/lndmais-alimentacao')
        .then(response => {
            const { listaRestaurantes } = response.data
            this.setState({
                restaurantes: listaRestaurantes,
                loading: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false})
        })
    }

    drawCardRestaurante(rst){
        return(
            <TouchableNativeFeedback key={rst._id} onPress={() => this.props.navigation.navigate('DetalhesRestaurantes', rst)}>

                <View style={Styles.cardRestaurante}>

                    <View>
                        <Image style={Styles.image} source={{uri: imageURL(rst.foto) }}></Image>
                    </View>

                    <View style={Styles.sobreRestaurante}>
                        <Text style={Styles.nomeRestaurante}>{rst.title}</Text>
                        <Text>{rst.local}</Text>
                    </View>

                </View>

            </TouchableNativeFeedback>
        )
    }

    render() {
        if(this.state.loading === true){
            return (
                <View style={Styles.container}>   
                    <ScrollView>    
                    <Text style={Styles.textoTopo}>Toque no card para ver mais informações</Text>   
                    { this.state.restaurantes.map((rst) => {
                            return this.drawCardRestaurante(rst)
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

export default Alimentacao