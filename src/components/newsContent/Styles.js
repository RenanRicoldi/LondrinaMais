import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    newsImage:{
        height: 240
    },
    newsView:{
        flex: 1
    },
    newsContent:{
        paddingLeft: 8,
        paddingRight: 8
    },
    newsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    newsText: {
        fontSize: 16,
        marginBottom: 5
    }

})

export default Styles