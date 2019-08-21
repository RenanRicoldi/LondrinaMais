import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    mapView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomButton: {
        height: Dimensions.get('window').height / 11,
        backgroundColor: '#97DB4F',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    Lista: {
        height: Dimensions.get('window').height / 13,
        backgroundColor: '#97DB4F',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        flex: 1
    },
    howToGetButton: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 13,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    closeList: {
        backgroundColor: '#d9d9d9',
        height: Dimensions.get('window').height / 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        flex: 1
    },
    bottomButtonText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 30
    },
    directionIcon: {
        height: Dimensions.get('window').width / 16,
        width: Dimensions.get('window').width / 16,
        marginRight: 5
    },
    container: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        width: Dimensions.get('window').width/1.4,
        height: Dimensions.get('window').height/1.6,
        
  },
  wrapper: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  }
})

export default Styles