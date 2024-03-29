import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#97DB4F'
    },
    wrapper: {
        flex: 1,
    },

    textoTopo: {
        alignSelf:'center',
        marginBottom: 10
    },

    palestrante: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 5
    },
    textWrap:{
        flexDirection: 'column',
        flex: 0.9    
    },
    palNome:{
        fontWeight: '600',
        fontSize: 16
    },
    palInstituicao:{
       flexWrap: 'wrap'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 100
    }
})

export default Styles