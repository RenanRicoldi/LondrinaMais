import React, {Component} from 'react'
import {View,
        ScrollView,
        Text,
		Image,
		Picker,
		Dimensions,
		Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from "react-native-modal";
import axios from 'axios'
import Feedback from '../../components/feedbackModal/Feedback'
import Styles from './Styles'

class Cronograma extends Component {

	constructor(){
		super()

		this.state = {
			day: "dia22",
			tipo: "palestra",
			cronograma: [],
			loading: true,
			isFeedbackVisible: false,
			isFeedbackSentMessageVisible: false,
			isFeedbackMessageNotSentVisible: false,
			nomeAtividade: ''
		}

	}

	updateDay = (day) =>{
		this.setState({ day:day })
	}

	componentDidMount() {
        axios.get('https://ieeeuel.org/_functions/api/lndmais-cronograma')
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronograma: listaCronograma,
                loading: true
            })
		})
		.catch(error => {
            console.log(error)
            this.setState({loading: false})
        })
	}

	toggleModal = (tipo) => {

		if (tipo === "feedback"){
			this.setState({ isFeedbackVisible: !this.state.isFeedbackVisible })
		}
		else if (tipo === "feedbackSentMessage"){
			this.setState({ isFeedbackVisible: !this.state.isFeedbackVisible })
			setTimeout( () =>
				this.setState({ isFeedbackSentMessageVisible: !this.state.isFeedbackSentMessageVisible }),
			800)

			setTimeout( () =>
			this.setState({ isFeedbackSentMessageVisible: !this.state.isFeedbackSentMessageVisible }),
			4300)
		}else if (tipo === "feedbackMessageNotSent"){
			this.setState({ isFeedbackVisible: !this.state.isFeedbackVisible })
			setTimeout( () =>
				this.setState({ isFeedbackMessageNotSentVisible: !this.state.isFeedbackMessageNotSentVisible }),
			800)

			setTimeout( () =>
			this.setState({ isFeedbackMessageNotSentVisible: !this.state.isFeedbackMessageNotSentVisible }),
			6300)
		}

	  };

	nomeTema(info){

		this.setState({ nomeAtividade: info.tema})

		return(
			Alert.alert(
				'Tema',
				info.tema,
				[
					{text: 'Voltar'},
					{text: 'Enviar feedback', onPress: () => this.toggleModal("feedback")}
				],
				{cancelable: true}
			)
		)
	}

	drawCard(info){

		if( info.title === this.state.day && info.tipo === this.state.tipo )
		return(
			<View key={info._id} style={Styles.cardInfo}>

						<View flex={1} flexDirection='row'>
							<Text style={Styles.cardTitle}>{info.horario}</Text>
							<Text style={Styles.cardTitle}> - {info.local}</Text> 
						</View>

						<TouchableOpacity activeOpacity={1} onPress={() => this.nomeTema(info)}> 
							<Text style={Styles.cardTema}>{info.tema.length < 60 ? info.tema : `${info.tema.substring(0,60)}...`}</Text>
						</TouchableOpacity>

						<View flex={1} justifyContent='flex-end'>
							<Text>{info.palestrante} </Text>
						</View>
						
			</View>
		)
	}

	render(){
		if(this.state.loading === true){
			return (
				<View style={Styles.container}>		
					
					<View flexDirection='row' flex={1} alignItems='center' justifyContent='space-around' marginBottom={5}>						
						<View>
						<TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({tipo:"palestra"})}>
							<View style={Styles.btnSwitcher}>
								<Image style={Styles.btnImage} source={require('../../../assets/icons/botoesCronograma/palestras.png')} />
								<Text style = {{ fontSize: Dimensions.get('window').height/55}}>Palestras</Text>
							</View>
						</TouchableOpacity>
						</View>	
						<View>
						<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"atvinterativa"})}>
							<View style={Styles.btnSwitcher}>
								<Image style={Styles.btnImageAtvInterativas} source={require('../../../assets/icons/botoesCronograma/atvinterativas.png')} />
								<Text style = {{ fontSize: Dimensions.get('window').height/55 }}>Atividades</Text><Text style = {{ fontSize: Dimensions.get('window').height/55 }}>Interativas</Text>
							</View>
						</TouchableOpacity>
						</View>	
						<View>
						<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"oficina"})}>
							<View style={Styles.btnSwitcher}>
								<Image style={Styles.btnImage} source={require('../../../assets/icons/botoesCronograma/oficinas.png')} />
								<Text style = {{ fontSize: Dimensions.get('window').height/55 }}>Oficinas</Text>
							</View>
						</TouchableOpacity>
						</View>	
					</View>
					
					<View flex={3}>

						<View style={Styles.pickerStl}>
						<Picker selectedValue = {this.state.day} onValueChange = {this.updateDay}>
							<Picker.Item label = "22 de agosto" value="dia22" />
							<Picker.Item label = "23 de agosto" value="dia23" />
							<Picker.Item label = "24 de agosto" value="dia24" />
						</Picker>
						</View>

					
						<ScrollView>
							{this.state.cronograma.map((info) => {
								return this.drawCard(info)
							})}
						</ScrollView>	

					</View>	
					
					<Modal isVisible={this.state.isFeedbackVisible}
						onBackButtonPress={() => this.toggleModal("feedback")}
						backdropTransitionOutTiming={0}
					>
						<Feedback titulo={this.state.nomeAtividade} disableModal={this.toggleModal}/>
					</Modal>

					<Modal isVisible={this.state.isFeedbackSentMessageVisible}
						animationIn='fadeIn' animationOut='fadeOut'
						backdropTransitionOutTiming={0}
						style={{alignItems:'center'}}>
						<View style={Styles.feedbackSentModalWrapper}>
							<Text style={{ fontSize: 16, fontWeight: 'bold'}}>Feedback enviado!</Text>
						</View>
					</Modal>

					<Modal isVisible={this.state.isFeedbackMessageNotSentVisible}
						animationIn='fadeIn' animationOut='fadeOut'
						backdropTransitionOutTiming={0}
						style={{alignItems:'center'}}>
						<View style={Styles.feedbackSentModalWrapper}>
							<Text style={{ fontSize: 16, fontWeight: 'bold'}}>Não foi possivel enviar</Text>
							<Text style={{ fontSize: 14}}>Verifique sua internet e tente novamente</Text>
						</View>
					</Modal>

				</View>
			)
        } else {
			return(
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#97DB4F', flex: 1 }}>
                    <Text style={ { fontSize: 15 }}>Não foi possível baixar os dados</Text>
                    <Text style={{ fontSize: 20 }}>Cheque sua internet</Text>  
                </View>
            )
        }	
	}

}

export default Cronograma

