import React from 'react'
import { View, Text, Image, StatusBar, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Styles from './Styles'
import { hours, days } from '../../utils/Time'

const Main = () => {
    return(
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#97DB4F'/>
            <View style={Styles.MainScreen}>
                <View style={Styles.logoBackground}>
                    <Image source={require('../../../assets/images/Logo.png')} style={Styles.logo}/>
                </View>
                <View style={Styles.Timer}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 50, color: 'white'}}>{days()}</Text>
                        <Text style={{fontSize: 15, color: 'white'}}>dias</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 40, color: 'white'}}>{hours()}</Text>
                        <Text style={{fontSize: 15, color: 'white'}}>horas</Text>
                    </View>
                </View>
                <Icon name='expand-less' size={20} color='#6F6A6B'/>
            </View>
        </>
    )
}

export default Main