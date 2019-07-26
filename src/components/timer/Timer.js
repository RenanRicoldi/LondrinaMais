import React from 'react'
import { View, Text } from 'react-native'
import { hours, days } from '../../utils/Time'

import Styles from './Styles'

function Timer() {
    return(
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
    )
}

export default Timer