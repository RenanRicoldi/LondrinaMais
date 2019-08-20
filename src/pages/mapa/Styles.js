import {StyleSheet,
        Dimensions} from 'react-native'

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
    },
    container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#97DB4F',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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