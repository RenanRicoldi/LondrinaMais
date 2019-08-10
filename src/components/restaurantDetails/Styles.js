import {StyleSheet,
        Dimensions} from 'react-native'

const Styles = StyleSheet.create({

    fundoImagem: {
        backgroundColor: '#66C500',
        height: 150
    },

    imageWrapper: {
        alignItems: 'center',
        marginTop: -100,
        marginBottom: 15
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderRadius: 8,
        borderColor: '#66C500',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    nomeRestaurante: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center'
    },
    local: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },

    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    btnStyle: {
        width: 45,
        height: 45,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 100,
        backgroundColor: '#66C500'
    },
    iconPhone: {
        marginTop: 7.5,
        width: 30,
        height: 30,
    },


    bordaCardapio:{
        padding: 10
    },
    wrapperCardapio: {
        padding: 5,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    tituloCardapio: {
        fontStyle: 'italic',
        alignSelf: 'center',
        fontSize: 14,
        marginBottom: 5
    },
    conteudoCardapio: {
        alignSelf: 'center',
        fontSize: 18,
        textAlign:'center'
    },

    iconeAlimentacao: {
        opacity: 0.8,
        marginTop: 25,
        marginBottom: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        width: ( Dimensions.get("window").width / 6 ) * 1.5,
        height: ( Dimensions.get("window").width / 8 ) * 1.5
    }

})

export default Styles