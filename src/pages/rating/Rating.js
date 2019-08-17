import React, { Component } from 'react'
import {View,
        Text,
        TouchableOpacity,
        TextInput} from 'react-native'
import axios from 'axios'
import Styles from './Styles'

class Rating extends Component {

    constructor(props){
        super(props)

        this.state = {
            feedback: '', 
            opiniao: ''
        };
    }

    sendFeedback(){

        axios.post('http://ieeeuel.org/_functions/myFunction/', {
            feedback: this.state.feedback,
            opiniao: this.state.opiniao
          })
          .then(function (response) {
            console.log(response)
            this.setState({opiniao:''})
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    render(){

        return(

            <View style={Styles.container}>
                <View style={Styles.titulo}>
                    <Text>Feedback</Text>
                </View>

                <View style={Styles.rateWrapper}>
                    <Text style={{fontStyle:'italic'}}>O que você achou da atividade</Text>
                    <Text>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>

                    <View style={Styles.btnWrapper}>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={Styles.btnStyle}
                            onPress={() => this.setState({feedback: 'Não gostei'})} />
                        <Text>Não gostei</Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={Styles.btnStyle}
                        onPress={() => this.setState({feedback: 'Gostei'})} />
                        <Text>Gostei</Text>
                    </View>
                    </View>
                </View>

                <View style={Styles.opinionWrapper}>
                    <Text>Escreva o motivo de sua opinião</Text>
                    <TextInput
                        style={Styles.textInput}
                        onChangeText={(opiniao) => this.setState({opiniao})}
                        value={this.state.opiniao}
                        multiline={true}
                        numberOfLines = {4}
                        maxLength = {600}
                    />
                </View>

                <TouchableOpacity 
                    style={Styles.titulo}
                    onPress={() => this.sendFeedback()}>
                    <Text>Enviar feedback</Text>
                </TouchableOpacity>
            </View>

        )

    }

}

export default Rating
