import React from 'react'
import { View, Image, Animated, Dimensions } from 'react-native'

import Styles from './Styles'

function Logo({ transY }) {
    return(
        <Animated.View style={[Styles.logoBackground, {opacity: transY.interpolate({
            inputRange: [ -Dimensions.get('window').height + (Dimensions.get('window').height/1.2 ), 0],
            outputRange: [ 0, 1 ],
            extrapolate: 'clamp',
        })}]}>
            <Image source={require('../../../assets/images/logoEvento/Logo.png')} style={Styles.logo}/>
        </Animated.View>
    )
}

export default Logo