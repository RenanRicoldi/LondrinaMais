import React, {Component} from 'react'
import {View,
        ScrollView,
        Text,
		Image,
		Picker} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import Styles from './Styles'

class Cronograma extends Component {

	constructor(){
		super()

		this.state = {
			day: "dia22",
			tipo: "palestra",
			cronograma: []
		}

	}

	updateDay = (day) =>{
		this.setState({ day:day })
	}

	componentDidMount() {
        axios.get('http://ieeeuel.org/_functions/api/lndmais-cronograma')
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronograma: listaCronograma
            })
		})
	}

	drawCard(info){

		if( info.title === this.state.day && info.tipo === this.state.tipo )
		return(
			<View key={info._id} style={Styles.cardInfo}>

						<View flex={1} flexDirection='row'>
							<Text style={Styles.cardTitle}>{info.horario}</Text>
							<Text style={Styles.cardTitle}> - {info.local}</Text> 
						</View>

						<View flex={3} justifyContent='center'>
							<Text style={Styles.cardTema}>{info.tema}</Text>
						</View>

						<View flex={1} justifyContent='flex-end'>
							<Text>{info.palestrante} </Text>
						</View>
						
			</View>
		)
	}

	render(){

		return (
			<View style={Styles.container}>
				
				<View flexDirection='row' flex={1} alignItems='center' justifyContent='space-around' marginBottom={5}>
					<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"palestra"})}><Text>Palestras</Text></TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"atvinterativa"})}><View><Text>Atividades</Text><Text>Interativas</Text></View></TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"oficina"})}><Text>Oficinas</Text></TouchableOpacity>
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



			</View>
		)
	}

}

export default Cronograma

