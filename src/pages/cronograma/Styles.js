import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#97DB4F'
    },

    btnSwitcher: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center'
    },

    pickerStl:{
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 15
    },

    cardInfo: {
        height: 140,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8,
        alignContent: 'stretch',
        marginBottom: 15
    },
    cardTitle: {
        color: 'gray'
    },
    cardTema: {
        fontSize: 22,
        fontWeight: '800'
    }

})

export default Styles