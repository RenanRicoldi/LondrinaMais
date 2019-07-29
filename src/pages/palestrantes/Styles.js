import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    wrapper: {
        flex: 1,
    },
    palestrante: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderColor: 'green',
        padding: 4
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
