import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#97DB4F'
    },
    
    textoTopo: {
      alignSelf:'center',
      marginBottom: 10
    },

    cardRestaurante: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 5
    },

    image: {
        width: Dimensions.get("window").width / 4.5,
        height: Dimensions.get("window").width / 4.5,
        borderRadius: 6,
        marginRight: 8
    },
    sobreRestaurante: {
        flexDirection: 'column',
        flex: 0.9    
    },
    nomeRestaurante: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default Styles