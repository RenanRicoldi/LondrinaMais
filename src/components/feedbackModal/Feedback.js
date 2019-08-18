import React, { Component } from 'react'
import {View,
        Text,
        TouchableOpacity,
        TextInput,
        Image} from 'react-native'
import axios from 'axios'
import Styles from './Styles'

class Feedback extends Component {

    constructor(props){
        super(props)

        this.state = {
            atividade: this.props.titulo,
            feedback: '', 
            opiniao: '',
            likeButtonEnabled: false,
            dislikeButtonEnabled: false
        };
    }

    sendFeedback(){

       axios.post('http://ieeeuel.org/_functions/myFunction/', {
            title: this.state.atividade,
            feedback: this.state.feedback,
            opiniao: this.state.opiniao
        })
        .then(response => {
            console.log(response)
            this.props.disableModal("feedbackSentMessage")
        })
        .catch(error => {
            console.log(error)
            this.props.disableModal("feedbackMessageNotSent")
        });

    }


    render(){

        return(

            <View style={Styles.container}>
                <View style={Styles.tituloWrapper}>
                    <Text style={Styles.tituloText}>Feedback</Text>
                </View>

                <View style={Styles.rateWrapper}>
                    <Text style={{fontStyle:'italic'}}>O que você achou da atividade</Text>
                    <Text style={Styles.atividadeText}>{this.state.atividade.length < 100 ? this.state.atividade : `${this.state.atividade.substring(0,100)}...`}</Text>

                    <View style={Styles.btnWrapper}>
                    <View style={{alignItems: 'center'}}>
                        {(this.state.dislikeButtonEnabled)?
                         <TouchableOpacity style={Styles.btnStyle}
                         onPress={() => this.setState({feedback: 'Não gostei', likeButtonEnabled: false, dislikeButtonEnabled: true})}>
                             <Image source={require('../../../assets/icons/feedback/thumbsDownEnabled.png')} style={Styles.btnDislikeStyle}/>
                         </TouchableOpacity>:
                        <TouchableOpacity style={Styles.btnStyle}
                        onPress={() => this.setState({feedback: 'Não gostei', likeButtonEnabled: false, dislikeButtonEnabled: true})}>
                            <Image source={require('../../../assets/icons/feedback/thumbsDownDisabled.png')} style={Styles.btnDislikeStyle}/>
                        </TouchableOpacity>}
                        <Text>Não gostei</Text>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        {(this.state.likeButtonEnabled)?
                         <TouchableOpacity style={Styles.btnStyle}
                         onPress={() => this.setState({feedback: 'Gostei', likeButtonEnabled: true, dislikeButtonEnabled: false})}>
                             <Image source={require('../../../assets/icons/feedback/thumbsUpEnabled.png')} style={Styles.btnLikeStyle}/>
                         </TouchableOpacity>:
                        <TouchableOpacity style={Styles.btnStyle}
                        onPress={() => this.setState({feedback: 'Gostei', likeButtonEnabled: true, dislikeButtonEnabled: false})}>
                            <Image source={require('../../../assets/icons/feedback/thumbsUpDisabled.png')} style={Styles.btnLikeStyle}/>
                        </TouchableOpacity>}

                        
                        <Text>Gostei</Text>
                    </View>
                    </View>
                </View>

                <View style={Styles.opinionWrapper}>
                    <Text>Escreva o motivo da sua opinião!</Text>
                    <TextInput
                        style={Styles.textInput}
                        onChangeText={(opiniao) => this.setState({opiniao})}
                        value={this.state.opiniao}
                        multiline={true}
                        numberOfLines = {4}
                        maxLength = {600}
                    />
                </View>

                {(this.state.feedback == '')?
                <TouchableOpacity 
                    style={Styles.sendButtonDisabled}
                    activeOpacity={.9}>
                    <Text style={Styles.sendButtonText}>Enviar feedback</Text>
                </TouchableOpacity>:
                <TouchableOpacity 
                    style={Styles.sendButtonEnabled}
                    onPress={() => this.sendFeedback()}
                    activeOpacity={.9}>
                    <Text style={Styles.sendButtonText}>Enviar feedback</Text>
                </TouchableOpacity>}
                
            </View>

        )

    }

}

export default Feedback
