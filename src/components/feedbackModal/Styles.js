import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 8
    },

    tituloWrapper:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    tituloText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    atividadeText:{
        fontSize: 18
    },

    rateWrapper: {
        backgroundColor: 'white',
        padding: 5,
    },
    btnWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 15
    },
    btnStyle:{
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 100
    },

    opinionWrapper: {
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 10
    },
    textInput: {
        height: 80,
        borderColor: 'gray',
        borderWidth: 1
    },

    sendButtonEnabled: {
        height: 50,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#66C500',
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center'
    },
    sendButtonDisabled: {
        height: 50,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#adadad',
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
    },
    sendButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white'
    }


})

export default Styles