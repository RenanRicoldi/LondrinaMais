import React, {Component} from 'react'
import {View,
        ScrollView,
        Text,
		Image,
		Picker} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import Styles from './Styles'

let urlP1 = 'https://next.json-generator.com/api/json/get/41eL6LsGw?indent=0'
let urlP2 = 'https://next.json-generator.com/api/json/get/VyXL4PoGv?indent=0'
let urlP3 = 'https://next.json-generator.com/api/json/get/EySL4Pszv?indent=0'

let urlO1 = 'https://next.json-generator.com/api/json/get/E18DNvjzD?indent=0'
let urlO2 = 'https://next.json-generator.com/api/json/get/4ywvVPjfD?ident=0'
let urlO3 = 'https://next.json-generator.com/api/json/get/NJuw4PoMv?indent=0'

let urlA1 = 'https://next.json-generator.com/api/json/get/VytDNDjfD?indent=0'
let urlA2 = 'https://next.json-generator.com/api/json/get/NJcvNvjfP?indent=0'
let urlA3 = 'https://next.json-generator.com/api/json/get/EJsD4voMD?indent=0'

class Cronograma extends Component {

	constructor(){
		super()

		this.state = {
			day: "day22",
			tipo: "palestra",
			cronoAtividades1: [],
			cronoAtividades2: [],
			cronoAtividades3: [],
			cronoOficina1: [],
			cronoOficina2: [],
			cronoOficina3: [],
			cronoPalestras1: [],
			cronoPalestras2: [],
			cronoPalestras3: []
		}

	}

	updateDay = (day) =>{
		this.setState({ day:day })
	}

	componentDidMount() {
        axios.get(urlA1)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoAtividades1: listaCronograma
            })
		})
		axios.get(urlA2)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoAtividades2: listaCronograma
            })
		})
		axios.get(urlA3)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoAtividades3: listaCronograma
            })
		})
		axios.get(urlO1)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoOficina1: listaCronograma
            })
		})
		axios.get(urlO2)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoOficina2: listaCronograma
            })
		})
		axios.get(urlO3)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoOficina3: listaCronograma
			})
		})
		axios.get(urlP1)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoPalestras1: listaCronograma
            })
		})
		axios.get(urlP2)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoPalestras2: listaCronograma
            })
		})
		axios.get(urlP3)
        .then(response => {
            const { listaCronograma } = response.data
            this.setState({
				cronoPalestras3: listaCronograma
            })
		})
	}

	drawCard(info){
		return(
			<View key={info.id} style={Styles.cardInfo}>

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

	displaySelected(){

		if( this.state.tipo === "palestra" ){
			if (this.state.day === "day22" ){
				return (
					this.state.cronoPalestras1.map((info) => {
						return this.drawCard(info)
					})
				)
			}else if (this.state.day === "day23" ){
				return (
					this.state.cronoPalestras2.map((info) => {
						return this.drawCard(info)
					})
				)
			}else if (this.state.day === "day24" ){
				return (
					this.state.cronoPalestras3.map((info) => {
						return this.drawCard(info)
					})
				)
			}
		}

		if( this.state.tipo === "oficina" ){
			if (this.state.day === "day22" ){
				return (
					this.state.cronoOficina1.map((info) => {
						return this.drawCard(info)
					})
				)
			}else if (this.state.day === "day23" ){
				return (
					this.state.cronoOficina2.map((info) => {
						return this.drawCard(info)
					})
				)
			}else if (this.state.day === "day24" ){
				return (
					this.state.cronoOficina3.map((info) => {
						return this.drawCard(info)
					})
				)
			}
		}

		if( this.state.tipo === "atv" ){
			if (this.state.day === "day22" ){	
					return (
						this.state.cronoAtividades1.map((info) => {
							return this.drawCard(info)
						})
					)
			}else if (this.state.day === "day23" ){
				return (
					this.state.cronoAtividades2.map((info) => {
						return this.drawCard(info)
					})
				)
			}else if (this.state.day === "day24" ){
				return (
					this.state.cronoAtividades3.map((info) => {
						return this.drawCard(info)
					})
				)
			}
		}
	}

	render(){

		return (
			<View style={Styles.container}>
				
				<View flexDirection='row' flex={1} alignItems='center' justifyContent='space-around' marginBottom={5}>
					<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"palestra"})}><Text>Palestras</Text></TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"oficina"})}><Text>Oficinas</Text></TouchableOpacity>
					<TouchableOpacity activeOpacity={0.9} style={Styles.btnSwitcher} onPress={() => this.setState({tipo:"atv"})}><View><Text>Atividades</Text><Text>Interativas</Text></View></TouchableOpacity>
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
						{this.displaySelected()}
					</ScrollView>


				</View>



			</View>
		)
	}

}

export default Cronograma

