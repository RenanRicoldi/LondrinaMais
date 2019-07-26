import React from 'react'
import { View, Text, Image, StatusBar, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Styles from './Styles'
import Timer from '../../components/timer/Timer'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'

const Main = () => {
    return(
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#97DB4F'/>
            <View style={Styles.MainScreen}>
                <Logo/>
                <Timer/>
                <Icon name='expand-less' size={20} color='#6F6A6B'/>
            </View>
        </>
    )
}

export default Main