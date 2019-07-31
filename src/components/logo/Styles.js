import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    logoBackground: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        marginTop: Dimensions.get('window').height/40,
        marginBottom: Dimensions.get('window').height/40,
    }
})

export default Styles

