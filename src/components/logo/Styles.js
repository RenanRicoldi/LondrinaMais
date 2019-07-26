import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    logoBackground: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        marginTop: 15,
        marginBottom: 15
    }
})

export default Styles

