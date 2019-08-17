import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#97DB4F'
    },

    titulo:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginBottom: 10
    },

    rateWrapper: {
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 10
    },
    btnWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 15,
        marginBottom: 10
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
    }


})

export default Styles