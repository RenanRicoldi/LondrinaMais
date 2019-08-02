import { StyleSheet, Dimensions, Animated } from 'react-native'
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'



const Styles = StyleSheet.create({
    MainScreen:{
        backgroundColor: '#97DB4F',
        alignItems: 'center',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    }
})

export default Styles