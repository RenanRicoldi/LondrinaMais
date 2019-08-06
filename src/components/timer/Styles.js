import { StyleSheet, Dimensions } from 'react-native'
import { hours, days } from '../../utils/Time'

const Styles = StyleSheet.create({
    Timer:{
        backgroundColor: '#698F3F',
        width: Dimensions.get('window').width/1.8 + (days() * 3) + hours(),
        height: Dimensions.get('window').width/1.8 + (days() * 3) + hours(),
        borderRadius: Dimensions.get('window').width/1.8 + (days() * 3) + hours(),
        marginTop: Dimensions.get('window').height/5.5,
        marginBottom: Dimensions.get('window').height,
        shadowColor: '#202030',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Styles