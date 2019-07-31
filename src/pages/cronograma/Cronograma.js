import React, {Component} from 'react'
import {View,
        ScrollView,
        Text,
		Image,
		Picker} from 'react-native'
import Styles from './Styles';

class Cronograma extends Component {
	
	state = {
		day: ''
	}
	updateDay = (day) =>{
		this.setState({ day:day })
	}

	drawCard(){
		return(
			<View style={Styles.cardInfo}>

						<View flex={1} flexDirection='row'>
							<Text style={Styles.cardTitle}>00:00h</Text>
							<Text style={Styles.cardTitle}> - Localização</Text> 
						</View>

						<View flex={3} justifyContent='center'>
							<Text style={Styles.cardTema}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dignissim justo.</Text>
						</View>

						<View flex={1} justifyContent='flex-end'>
							<Text>Palestrante</Text>
						</View>
						
			</View>
		)
	}

	render(){
		return (
			<View style={Styles.container}>
				
				<View flexDirection='row' flex={1} alignItems='center' justifyContent='space-around' marginBottom={5}>
					<View style={Styles.btnSwitcher}><Text>Palestras</Text></View>
					<View style={Styles.btnSwitcher}><Text>Oficinas</Text></View>
					<View style={Styles.btnSwitcher}><Text>Atividades</Text><Text>Interativas</Text></View>
				</View>

				<View flex={3}>

					<View style={Styles.pickerStl}>
						<Picker selectedValue = {this.state.day} onValueChange = {this.updateDay}>
							<Picker.Item label = "22 de agosto" value="day22" />
							<Picker.Item label = "23 de agosto" value="day23" />
							<Picker.Item label = "24 de agosto" value="day24" />
						</Picker>
					</View>

					<ScrollView>
						{this.drawCard()}
						{this.drawCard()}
						{this.drawCard()}
						{this.drawCard()}
						{this.drawCard()}
						{this.drawCard()}
					</ScrollView>


				</View>



			</View>
		)
	}

}

export default Cronograma

