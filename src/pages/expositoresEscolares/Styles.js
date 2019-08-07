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

    expositor: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 5,
        alignItems: 'center'
    },
    expositorNome:{
        fontWeight: '600',
        fontSize: 16
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 100,
    },
})

export default Styles
