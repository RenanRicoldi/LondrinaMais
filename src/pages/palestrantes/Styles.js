import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#B4EE48'
    },

    wrapper: {
        flex: 1,
    },

    palestrante: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 5
    },
    palNome:{
        fontWeight: '600',
        fontSize: 16
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 100,
        backgroundColor: 'red'
    }
})

export default Styles
