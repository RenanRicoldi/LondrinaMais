import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    Menu:{
        alignItems:'center',
        justifyContent:'center',
    },
    Feed:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width/1.3,
        height: Dimensions.get('window').height/8.5,
        paddingLeft: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20        
    },
    TextoFeed:{
        color: '#000',
        fontSize: 17,
        paddingLeft: 20 
    },
    ItemsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Items:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width/2.8,
        height: Dimensions.get('window').height/7,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 10,
        marginBottom: 20,
        paddingBottom: 2
    },
    TextItems:{
        color:'#000',
        paddingTop: 5,
    },
    Logos:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: Dimensions.get('window').width/1.3,
        height: Dimensions.get('window').height/8,
        borderRadius: 10,
    }
})


export default Styles
