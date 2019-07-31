import React, { Component } from 'react'
import { View, Animated, Image, Text, Dimensions } from 'react-native'

import Styles from './Styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

class Menu extends Component{
    render(){
        return(
            <Animated.View style={[Styles.Menu,{
                transform: [{
                    translateY: this.props.transY.interpolate({
                        inputRange: [ -Dimensions.get('window').height, 0],
                        outputRange: [ -Dimensions.get('window').height + (Dimensions.get('window').height/10), 0],
                        extrapolate: 'clamp',
                    }),
                }],
            }]}>
                <TouchableWithoutFeedback style = { Styles.Feed } onPress={() => this.props.navigation.navigate('NewsFeed')}>
                    <Image source={require('../../../assets/icons/feed/feed.png')}/>
                    <Text style={ Styles.TextoFeed }>Feed de Notícias</Text>
                </TouchableWithoutFeedback>

                <View style={ Styles.ItemsContainer }>
                    <TouchableWithoutFeedback style={ Styles.Items } onPress={() => this.props.navigation.navigate('Palestrantes')}>
                        <Image source={require('../../../assets/icons/palestrantes/palestrantes.png')}/>
                        <Text style={ Styles.TextItems }>Palestrantes</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={ [Styles.Items, {marginLeft: 20}] } onPress={() => this.props.navigation.navigate('Cronograma')}>
                        <Image source={require('../../../assets/icons/cronograma/cronograma.png')}/>
                        <Text style={ Styles.TextItems }>Cronograma</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={ Styles.ItemsContainer }>
                    <View style={ Styles.Items }>
                        <Image source={require('../../../assets/icons/expositores/expositores.png')}/>
                        <Text style={{ color: '#000', fontSize: 13 }}>Expositores</Text>
                        <Text style = {{ fontSize: 10 }}>Unidades Escolares</Text>
                    </View>
                    <View style={ [Styles.Items, {marginLeft: 20}] }>
                        <Image source={require('../../../assets/icons/expositores/expositores.png')}/>
                        <Text style={{ color: '#000', fontSize: 13 }}>Expositores</Text>
                        <Text style = {{ fontSize: 10 }}>Parceiros</Text>
                    </View>
                </View>
                <View style={ Styles.ItemsContainer }>
                    <View style={ Styles.Items }>
                        <Image source={require('../../../assets/icons/mapa/mapa.png')}/>
                        <Text style={ Styles.TextItems }>Mapa</Text>
                    </View>
                    <View style={ [Styles.Items, {marginLeft: 20}] }>
                        <Image source={require('../../../assets/icons/alimentacao/alimentacao.png')}/>
                        <Text style={ Styles.TextItems }>Alimentação</Text>
                    </View>
                </View>
                <View style={ Styles.Logos }>
                    <Image source={require('../../../assets/images/logoPrefeitura/Logo.png')} style={{ marginRight: 60 }}/>
                    <Image source={require('../../../assets/images/logoRamo/Logo.png')}/>
                </View>
            </Animated.View>
        )
    }
}

export default Menu