import React from 'react'
import { View, Text, Animated, Dimensions } from 'react-native'
import { hours, days } from '../../utils/Time'

import Styles from './Styles'

const IsItOver = () => {
    const now = hours() + days()

        return(
            <>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: Dimensions.get('window').width/14, color: 'white'}}>Até o próximo</Text>
                    <Text style={{fontSize: Dimensions.get('window').width/14, color: 'white'}}>ano!</Text>
                </View>
            </>
        )
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