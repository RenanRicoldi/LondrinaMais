import React, {Component} from 'react'
import { ScrollView,
        View,
        Text,
        TouchableOpacity,
        Image,
        Linking,
        Alert,
        Dimensions,
        ToastAndroid } from 'react-native'

import GallerySwiper from "react-native-gallery-swiper"
import Modal from "react-native-modal"

import Styles from './Styles'

const listaInternacional = [
    'SME - História e Geografia', '', 'CMEI Durvalina', 'EM Cecília Herminia', 'Universidade Positivo', 'SEBO Maringá'
, 'EM Tereza Canhadas', 'Em Dalva Fahl', 'EM Haydee', 'CMEI Clélia Regina', 'COPEL', 'EM José Gasparini', 'EM Maria Cândida'
, '', 'SME - Arte', 'EM Luiz Marques', 'EM Norman Prochet', 'CEI Pintando o Arco Íris', '', 'SME - Inglês', 'CMEI Marina Saboia'
, 'CMEI Vilma Eliza', 'CMEI Lavínia', 'Xadrez', 'CMEI João Rampazzo', 'CMEI Yolanda Salgado', 'em Osvaldo Cruz', 'CMEI Nissia Rocha'
, 'Guarda Municipal', 'EM Andrea Nuzzi', 'EM Zumbi dos Palmares', 'Ciranda', 'EM Moacyr Teixeira', 'CMEI Marisa Arruda', 'EM Carlos Costa', 'AFEL'
, 'CMEI Valéria Veronesi', 'EM Aristeu', 'CMEI Rosângela Oliveira', 'EM América Sabino', 'EM Atanázio', 'EM Hikoma Udihara'
, 'CEI ABAC', 'EM Corveta Camaquã', 'SME - GAE', 'CMEI Francisco Quesada', 'EM Aracy Soares', 'EM Salin Aborihan', 'CMEI Helena Ometo'
, 'SME - EJA', 'EM Edmundo Odebrecht', 'CEI Vitória Mazeti', 'EM Suely Yderiha', 'CEI AMPAS', 'EM Ruth Ferreira', 'ERISON'
, 'CMEI Anita Correa', 'EM Leonor Maestri', 'CMEI Clemilde', 'EM Neman Sahyun', 'EM Juliano Sthighen', 'SM - Mulher', 'EM Francisco Pereira'
, 'EM Melvin Jones', 'EM Maria Irene', 'CMEI Carolina Benedita', 'EM Carlos Dietz', 'CMEI Amanda', 'EM Joaquim Vicente', 'CMTU', 'EM Elias Kauã', 'PEARSON'
, 'CMEI Antonieta', 'EM Mari Carrera'
]

const listaNacional = [
    'Unimed', 'EM Arthur Thomas', 'EM Carlos Kraemer', 'EM Cláudio Almeida', 'EM David Dequech', 'EM Hélvio Esteves'
, '', 'EM José Garcia'
, 'EM Mábio', 'EM Maria Carmelita', 'Blink', 'EM Odesio Franciscon', 'EM Ruth Lemos', '', 'EM Machado de Assis', , 'CMEI Abdias'
, 'EM San Izidro', 'Ensina Mais Turma Da Mônica'
, 'EM Miguel Bespalhok', 'CMEI Marli Marques', 'Amado Tecnologia', 'CEI Analia Franco', 'Instituto Roberto Miranda', 'EM João XXII'
, 'Ramo Estudantil IEEE UEL', 'CMEI Marizia Carli'
, 'CMEI Fancisco Seixas', 'EM Vilma Rodrigues', 'CMEI Laura Virginia', 'SINDSERV', 'CMEI Telma', 'CMEI Lavínia', 'UNICESUMAR', '---SME---'
, 'EM Gaspar Velozo'
, 'EM da Vila Brasil', 'EM Eurides Cunha', 'EM Geni Ferreira', 'E-Eletrônico', 'EM José Hosken', 'SEBRAE', 'EM Nina Gardman', 'Rafael Arruda'
, 'CEI Governador José Richa'
, 'EM Bento Munhoz', 'EM Pedro Vergara', 'EM Nara Manela', 'EM Maria Shirley', 'EM Leônidas', 'CMEI Water Okano', 'CMEI Ruth dos Santos Silva'
, 'EM do Campo Trabalho e Saber'
, 'EM do Campo Egídio Domingos', 'CEI Nova Vida', 'CMEI Irmã Maria Nívea', 'COMPAZ', 'EM Roberto Pânico', 'Canto em Cada Canto'
, 'CEI Santo Antônio', 'EM Francisco Aquino'
, 'EM Mercedes Madureira', 'CEI Marabá', 'EM Armando Rosário', 'EM Santos Dumond', 'EM Sona Parreira', 'EM Joaquim Pereira', 'CMEI Vanderlaine'
, 'CEI Espaço Criança', 'EM Anita Garibaldi'
, 'Genus', 'Sapiens', 'CMEI Sandra Regina', 'SICREDI', 'CMEI Rafaela Kemmer', 'CMEI Kalin Youssef Youssef', 'EM Irene Aparecida'
, 'EM Carlos Zewe', 'EM Bartolomeu', 'EM Anchieta']

class Mapa extends Component {
    state = {
        modalVisibleNacional: false,
        modalVisibleInternacional: false,
        idNacional: 0
    }
    
    setModalVisibleNacional(visible) {
        this.setState({modalVisibleNacional: visible});
    }

    setModalVisibleInternacional(visible) {
        this.setState({modalVisibleInternacional: visible});
    }
    
    render(){
        ToastAndroid.showWithGravityAndOffset('Deslize para ver os outros mapas', ToastAndroid.LONG, ToastAndroid.TOP, 0, Dimensions.get('window').height/9)

        return(
            <View style ={{flex:1, backgroundColor: '#97DB4F'}}>
                <Modal
                    animationType="slide"
                    backdropTransitionOutTiming={0}
                    style={{alignItems:'center'}}            
                    isVisible={this.state.modalVisibleNacional}
                    onRequestClose={() => {
                        this.setModalVisibleNacional(!this.state.modalVisibleNacional)
                    }}>                   
                        <ScrollView style={Styles.container}>
                            {listaNacional.map((name) => {
                                if(name !== ''){
                                    return(
                                        <View style={Styles.Lista}>
                                            <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/28}}>{`${listaNacional.indexOf(name)+1}`}</Text>
                                            <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/25}}>{`${name}`}</Text>
                                        </View>
                                    )
                                }
                                
                            })}

                            <TouchableOpacity onPress={() => { this.setModalVisibleNacional(!this.state.modalVisibleNacional) }}>
                                <View style={Styles.closeList}>
                                    <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/28}}>Fecha Lista</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                </Modal>
                <Modal
                    animationType="slide"
                    backdropTransitionOutTiming={0}
                    style={{alignItems:'center'}}            
                    isVisible={this.state.modalVisibleInternacional}
                    onRequestClose={() => {
                        this.setModalVisibleInternacional(!this.state.modalVisibleInternacional)
                    }}>                   
                        <ScrollView style={Styles.container}>
                            {listaInternacional.map((name) => {
                                if(name !== ''){
                                    return(
                                        <View style={Styles.Lista}>
                                            <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/28}}>{`${listaInternacional.indexOf(name)+1}`}</Text>
                                            <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/25}}>{`${name}`}</Text>
                                        </View>
                                    )
                                }
                                
                            })}

                            <TouchableOpacity onPress={() => { this.setModalVisibleInternacional(!this.state.modalVisibleInternacional) }}>
                                <View style={Styles.closeList}>
                                    <Text style={{fontWeight: 'bold', fontSize: Dimensions.get('window').width/28}}>Fecha Lista</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                </Modal>
                <GallerySwiper style ={{backgroundColor: '#97DB4F'}}
                    images={[
                        { url: "https://static.wixstatic.com/media/e5a37f_24992410b8ab4a51a6eec11645587599~mv2_d_3508_2480_s_4_2.jpg" },
                        { uri: "https://static.wixstatic.com/media/e5a37f_032dd4f6e6bf43c4a0df67cb33875b67~mv2_d_6732_4252_s_4_2.jpg" },
                        { URI: "https://static.wixstatic.com/media/e5a37f_baf93dfdfc9d42c5b4d60a6749696d20~mv2_d_7087_4606_s_4_2.jpg" },
                    ]}
                />
                <View style={Styles.bottomButton}>
                    <TouchableOpacity activeOpacity={.9} onPress={() => this.setModalVisibleInternacional(true)}>
                        <View style={Styles.howToGetButton}>
                            <Image style={Styles.directionIcon} source={require('../../../assets/icons/infoListas/info.png')}></Image>
                            <Text style={Styles.bottomButtonText}>Stands do Pavilhão Internacional</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.bottomButton}>
                    <TouchableOpacity activeOpacity={.9} onPress={() => this.setModalVisibleNacional(true)}>
                        <View style={Styles.howToGetButton}>
                            <Image style={Styles.directionIcon} source={require('../../../assets/icons/infoListas/info.png')}></Image>
                            <Text style={Styles.bottomButtonText}>Stands do Pavilhão Nacional</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.bottomButton}>
                    <TouchableOpacity activeOpacity={.9} onPress={() => Linking.openURL(url='https://goo.gl/maps/PXFnR6DmZ4ay9wDu6')}>
                        <View style={Styles.howToGetButton}>
                            <Image style={Styles.directionIcon} source={require('../../../assets/icons/mapa/directions.png')}></Image>
                            <Text style={Styles.bottomButtonText}>Como chegar no evento</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }

}

export default Mapa