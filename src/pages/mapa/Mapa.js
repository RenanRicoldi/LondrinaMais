import React, {Component} from 'react'
import {View,
        Text,
        TouchableOpacity,
        Image,
        Linking} from 'react-native'
import Styles from './Styles'

class Mapa extends Component {

    render(){
        return(
            <View style={Styles.container}>

                <View style={Styles.mapView}>
                    <Text style={Styles.emBreve}>Em breve</Text>
                    <Text style={Styles.descricao}>Mapa completo do evento!</Text>
                    <Image source={require('../../../assets/icons/mapa/map_outline.png')}></Image>
                </View>

                <View style={Styles.bottomButton}>
                    <TouchableOpacity activeOpacity={.9} onPress={() => Linking.openURL(url='https://goo.gl/maps/PXFnR6DmZ4ay9wDu6')}>
                        <View style={Styles.howToGetButton}>
                            <Image style={Styles.directionIcon} source={require('../../../assets/icons/mapa/directions.png')}></Image>
                            <Text style={Styles.bottomButtonText}>Como chegar no evento</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }

}

export default Mapa