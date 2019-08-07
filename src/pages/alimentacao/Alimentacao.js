import React, {Component} from 'react'
import {View,
        Text,
        ScrollView,
        Image,
        TouchableNativeFeedback} from 'react-native'
import axios from 'axios'
import Styles from './Styles'

class Alimentacao extends Component {

    constructor() {
        super();

        this.state = {
            restaurantes: []
        }
    }

    componentDidMount() {
        axios
        .get('https://next.json-generator.com/api/json/get/EJyDAEVQP?indent=0')
        .then(response => {
            const { listaRestaurantes } = response.data
            this.setState({
                restaurantes: listaRestaurantes
            })
        })
    }

    drawCardRestaurante(rst){
        return(
            <TouchableNativeFeedback key={rst.id} onPress={() => this.props.navigation.navigate('DetalhesRestaurantes', rst)}>

                <View style={Styles.cardRestaurante}>

                    <View>
                        <Image style={Styles.image} source={{uri: rst.foto}}></Image>
                    </View>

                    <View style={Styles.sobreRestaurante}>
                        <Text style={Styles.nomeRestaurante}>{rst.nome}</Text>
                        <Text>{rst.local}</Text>
                    </View>

                </View>

            </TouchableNativeFeedback>
        )
    }

    render() {
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
    }


}

export default Alimentacao