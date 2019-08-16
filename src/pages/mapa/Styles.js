import {StyleSheet,
        Dimensions} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#97DB4F',
    },

    mapView: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emBreve:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: Dimensions.get('window').width / 30,
        opacity: 0.5
    },
    descricao: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 20
    },

    bottomButton: {
        height: Dimensions.get('window').height / 11,
        backgroundColor: '#66C500',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    howToGetButton: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 13,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bottomButtonText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 30
    },
    directionIcon: {
        height: Dimensions.get('window').width / 16,
        width: Dimensions.get('window').width / 16,
        marginRight: 5
    }

})

export default Styles