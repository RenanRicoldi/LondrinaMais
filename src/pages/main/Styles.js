import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { hours, days } from '../../utils/Time'

const Styles = StyleSheet.create({
    MainScreen:{
        backgroundColor: '#97DB4F',
        alignItems: 'center',
        flex: 1,
        paddingTop: getStatusBarHeight()
    },
    Timer:{
        backgroundColor: '#698F3F',
        marginTop: Dimensions.get('window').height/5,
        marginBottom: Dimensions.get('window').height/6,
        shadowColor: '#202030',
        shadowOffset:{
            width: 2,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width/1.5,
        height: Dimensions.get('window').width/1.5,
        borderRadius:  Dimensions.get('window').width/1.5
    },
    logoBackground: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        marginTop: 15,
        marginBottom: 15
    }
})

export default Styles