import React, {Component} from 'react'
import {View,
        ScrollView,
        StyleSheet,
        Text,
        Image,
        TouchableNativeFeedback} from 'react-native'
import axios from 'axios'
import Styles from './Styles'

class Newsfeed extends Component {

    constructor(){
        super();

        this.state = {
            news: []
        }
    }

    componentDidMount() {
        axios
        .get('http://www.json-generator.com/api/json/get/bOEeSKLnci?indent=0')
        .then(response => {
            const { newsFeed } = response.data
            this.setState({
                news: newsFeed
            })
        })
    }

    drawCard(noticia){
        return(
            <TouchableNativeFeedback key={ noticia.id } onPress={() => { this.props.navigation.navigate("NewsContent", {image : true, titulo: noticia.titulo, texto: noticia.conteudo, imgURL: noticia.picture} ) }}>
            <View style={Styles.newsCard}>
                    <Image style={Styles.newsCardImage} source={{uri: noticia.picture }}></Image>
                    <View style={Styles.newsCardContent}> 
                        <Text style={Styles.newsCardTitle}>{noticia.titulo}</Text>
                    </View> 
            </View>
            </TouchableNativeFeedback>
        );
    }

    drawCardNoPicture(noticia){
        return(
            <TouchableNativeFeedback key={ noticia.id } onPress={() => { this.props.navigation.navigate("NewsContent", {image : false, titulo: noticia.titulo, texto: noticia.conteudo, imgURL: noticia.picture} ) }}>
            <View style={Styles.newsCardNoPicture}>
                    <View style={Styles.newsCardContent}> 
                        <Text style={Styles.newsCardTitle}>
                            {noticia.titulo.length <= 100?
                            noticia.titulo:
                            `${noticia.conteudo.substring(0,65)}...`}
                        </Text>
                        <Text style={Styles.newsCardDesc} numberOfLines={2}>
                            {noticia.conteudo.length < 100?
                            noticia.conteudo:
                            `${noticia.conteudo.substring(0,100)}...`}
                        </Text>
                    </View> 
            </View>
            </TouchableNativeFeedback>
        );
    }

    render() {

        return(
            <View style={Styles.container}>

                <ScrollView>
                { this.state.news.map((noticia) => {
                        return (noticia.imagem)?
                            this.drawCard(noticia):
                            this.drawCardNoPicture(noticia)
                    })}
                </ScrollView>
                
            </View>
        );

    }


}

export default Newsfeed;