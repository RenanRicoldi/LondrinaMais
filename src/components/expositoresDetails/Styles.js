import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
        width: 200,
        height: 200,
        borderWidth: 5,
        borderRadius: 8,
        borderColor: '#66C500',
        backgroundColor: 'white',
        marginBottom: 5
    },
    nome: {
        fontSize: 30,
        fontWeight: '600',
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
    iconFacebook: {
        marginTop: 9.5,
        marginRight: 1,
        width: 25,
        height: 25,
    },

    sobreWrapper: {
        alignItems: 'center',
        marginBottom: 15,
        padding: 10
    },
    sobreTitulo: {
        fontStyle: 'italic'
    },
    sobreConteudo: {
        fontSize: 16,
        textAlign: 'justify'
    }
})

export default Styles
