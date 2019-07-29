import React, {Component} from 'react';
import {View, 
        StyleSheet,
        ScrollView,
        TouchableNativeFeedback,
        Image,
        Text} from 'react-native';
import axios from 'axios';

class PalHome extends Component {

    static navigationOptions = {
        title: 'Palestrantes'
    }

    constructor() {
        super();

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios
        .get('http://www.json-generator.com/api/json/get/cfnxrNpuoO?indent=0')
        .then(response => {
            const { listaPalestrantes } = response.data
            this.setState({
                people: listaPalestrantes
            })
        })
    }

    drawContent(person) {

        return (
            <TouchableNativeFeedback key={person.nome} onPress={() => { this.props.navigation.navigate("Details", person ) }}>
                <View style={styles.palestrante}>
                    <Image style={styles.image} source={{uri: person.picture }} />
                        
                    <View>
                        <Text style={styles.palNome}>{person.nome}</Text>
                        <Text>{person.instituicao}</Text>
                    </View> 

                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.wrapper}>
                    { this.state.people.map((person) => {
                        return this.drawContent(person)
                    })}
                </ScrollView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default PalHome;