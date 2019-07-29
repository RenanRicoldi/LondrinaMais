import React from 'react'
import { View, Image } from 'react-native'

import Styles from './Styles'

function Logo() {
    return(
        <View style={Styles.logoBackground}>
            <Image source={require('../../../assets/images/logoEvento/Logo')} style={Styles.logo}/>
        </View>
    )
}

export default Logo