import React from 'react'
import { View, Text, Animated, Dimensions } from 'react-native'
import { hours, days } from '../../utils/Time'

import Styles from './Styles'

const IsItOver = () => {
    const now = hours() + days()

    if(now > 0){
        return(
            <>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 50, color: 'white'}}>{days()}</Text>
                    <Text style={{fontSize: 15, color: 'white'}}>dias</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 40, color: 'white'}}>{hours()}</Text>
                    <Text style={{fontSize: 15, color: 'white'}}>horas</Text>
                </View>
            </>
        )
    } else{
        return(
            <>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: Dimensions.get('window').width/11, color: 'white'}}>Começou!</Text>
                </View>
            </>
        )
    }
    
}

function Timer({ transY }) {
    return(
        <Animated.View style={[Styles.Timer, {opacity: transY.interpolate({
            inputRange: [ -Dimensions.get('window').height + (Dimensions.get('window').height/1.05), 0],
            outputRange: [ 0, 1 ],
            extrapolate: 'clamp',
        })}]}>
            <IsItOver/>
        </Animated.View>
    )
}

export default Timer