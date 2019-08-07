import React, { Component } from 'react'
import { View, Animated, Image, Text, Dimensions, Linking } from 'react-native'

import Styles from './Styles'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

class Menu extends Component{
    render(){
        return(
            <Animated.View style={[Styles.Menu,{
                transform: [{
                    translateY: this.props.transY.interpolate({
                        inputRange: [ -Dimensions.get('window').height, 0],
                        outputRange: [ -Dimensions.get('window').height + (Dimensions.get('window').height/18), 0],
                        extrapolate: 'clamp',
                    }),
                }],
            }]}>
                <TouchableWithoutFeedback style = { Styles.Feed } onPress={() => this.props.navigation.navigate('NewsFeed')}>
                    <Image source={require('../../../assets/icons/feed/feed.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                    <Text style={ Styles.TextoFeed }>Feed de Notícias</Text>
                </TouchableWithoutFeedback>

                <View style={ Styles.ItemsContainer }>
                    <TouchableWithoutFeedback style={ Styles.Items } onPress={() => this.props.navigation.navigate('Palestrantes')}>
                        <Image source={require('../../../assets/icons/palestrantes/palestrantes.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                        <Text style={ Styles.TextItems }>Palestrantes</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={ [Styles.Items, {marginLeft: 20}] } onPress={() => this.props.navigation.navigate('Cronograma')}>
                        <Image source={require('../../../assets/icons/cronograma/cronograma.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                        <Text style={ Styles.TextItems }>Cronograma</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={ Styles.ItemsContainer }>
                    <TouchableWithoutFeedback style={ Styles.Items } onPress={() => this.props.navigation.navigate('Expositores', {type: 'https://next.json-generator.com/api/json/get/E15K-S4XD?ident=0'})}>
                        <Image source={require('../../../assets/icons/expositores/expositores.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                        <Text style={{ color: '#000', fontSize: Dimensions.get('window').height/60 }}>Expositores</Text>
                        <Text style = {{ fontSize: Dimensions.get('window').height/65 }}>Unidades Escolares</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={[ Styles.Items, {marginLeft: 20} ]} onPress={() => this.props.navigation.navigate('Expositores', {type: 'https://next.json-generator.com/api/json/get/4ks3PmNXP?ident=0'})}>
                        <Image source={require('../../../assets/icons/expositores/expositores.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                        <Text style={{ color: '#000', fontSize: Dimensions.get('window').height/60 }}>Expositores</Text>
                        <Text style = {{ fontSize: Dimensions.get('window').height/65 }}>Parceiros</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={ Styles.ItemsContainer }>
                    <View style={ Styles.Items }>
                        <Image source={require('../../../assets/icons/mapa/mapa.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                        <Text style={ Styles.TextItems }>Mapa</Text>
                    </View>
                    <View style={ [Styles.Items, {marginLeft: 20}] }>
                        <Image source={require('../../../assets/icons/alimentacao/alimentacao.png')} style={{width: Dimensions.get('window').width/6, height:  Dimensions.get('window').width/8}} resize='contain'/>
                        <Text style={ Styles.TextItems }>Alimentação</Text>
                    </View>
                </View>
                <View style={ Styles.Logos }>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => Linking.openURL(url='https://www.londrina.pr.gov.br')}>
                        <Image source={require('../../../assets/images/logoPrefeitura/Logo.png')} style={{ marginRight: 60 }}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => Linking.openURL(url='https://ieeeuel.org')}>
                        <Image source={require('../../../assets/images/logoRamo/Logo.png')}/>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

export default Menu