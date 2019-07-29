import React from 'react';
import {Text,
        View,
        Image,
        StyleSheet} from 'react-native';

class PalDetails extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

        const person = this.props.navigation.state.params;

        return (
        <View>

            <View>
                <View style={styles.fundoImagem}></View>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: person.picture }} />
                    <Text style={styles.nome}>{person.nome}</Text>
                    <Text style={styles.instit}>{person.instituicao}</Text>
                </View>
            </View>

            <View style={styles.sobreWrapper}>
                <View>
                    <Text style={styles.sobreTitulo}>Sobre</Text>
                    <Text style={styles.sobreConteudo}>{person.sobre}</Text>
                </View>
            </View>


            <View style={styles.bordaContato}>
            <View style={styles.contatoWrapper}>
                <Text style={styles.contatoTitulo}>Contato</Text>
                <Text style={styles.contatoEmail}>{person.email}</Text>
            </View>
            </View>

        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    fundoImagem: {
        backgroundColor: '#66C500',
        height: 150
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -100,
        marginBottom: 15
    },
    image: {
        width: 200,
        height: 200,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#66C500',
        backgroundColor: 'white',
        marginBottom: 5,
    },
    nome: {
        fontSize: 30,
        fontWeight: '600'
    },
    instit: {
        fontSize: 18,
        fontWeight: '400'
        
    },

    sobreWrapper: {
        alignItems: 'center',
        marginBottom: 15,
        padding: 10
    },
    sobreTitulo: {
        fontStyle: 'italic'
    },
    sobreConteudo: {
        fontSize: 16
    },

    bordaContato: {
        padding: 10
    },
    contatoWrapper: {
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#66C500',
        padding: 5,
        alignItems: 'center'
    },
    contatoTitulo: {
        fontWeight: '600',
        justifyContent: 'center',
        color: 'white'
    },
    contatoEmail:{
        fontSize: 18,
        marginTop: 12,
        color: 'white'
    }
    
})


export default PalDetails;