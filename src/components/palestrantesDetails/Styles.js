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
        borderRadius: 100,
        borderColor: '#66C500',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    nome: {
        fontSize: 30,
        fontWeight: '600',
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'center'
    },
    instit: {
        fontSize: 18,
        fontWeight: '400' ,
        paddingRight: 10,
        paddingLeft: 10,
        textAlign: 'center'
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
    },
    bordaContato: {
        alignItems: 'center',
        padding: 10
    },
    contatoWrapper: {
        height: 50,
        width: 200,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#66C500',
        padding: 5,
        alignItems: 'center'
    },
    contatoTitulo: {
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
        color: 'white'
    },
    iconEmail: {
        width: 25,
        height: 25,
        marginRight: 6
    }
})

export default Styles
