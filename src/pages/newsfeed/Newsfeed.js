import React, {Component} from 'react'
import {View,
        ScrollView,
        StyleSheet,
        Text,
        Image,
        TouchableNativeFeedback} from 'react-native'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
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
        .get('http://ieeeuel.org/_functions/api/lndmais-newsfeed')
        .then(response => {
            const { newsFeed } = response.data
            this.setState({
                news: newsFeed
            })
        })
    }

    drawCard(noticia){
        return(
            <TouchableNativeFeedback key={ noticia._id } onPress={() => { this.props.navigation.navigate("NewsFeedContent", {image : true, titulo: noticia.title, texto: noticia.noticia, imgURL: noticia.foto} ) }}>
            <View style={Styles.newsCard}>
                    <Image style={Styles.newsCardImage} source={{uri: imageURL(noticia.foto) }}></Image>
                    <View style={Styles.newsCardContent}> 
                        <Text style={Styles.newsCardTitle}>{noticia.title}</Text>
                    </View> 
            </View>
            </TouchableNativeFeedback>
        );
    }

    drawCardNoPicture(noticia){
        return(
            <TouchableNativeFeedback key={ noticia._id } onPress={() => { this.props.navigation.navigate("NewsFeedContent", {image : false, titulo: noticia.title, texto: noticia.noticia, imgURL: noticia.foto} ) }}>
            <View style={Styles.newsCardNoPicture}>
                    <View style={Styles.newsCardContent}> 
                        <Text style={Styles.newsCardTitle}>
                            {noticia.title.length <= 100?
                            noticia.title:
                            `${noticia.noticia.substring(0,65)}...`}
                        </Text>
                        <Text style={Styles.newsCardDesc} numberOfLines={2}>
                            {noticia.noticia.length < 100?
                            noticia.noticia:
                            `${noticia.noticia.substring(0,100)}...`}
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
                        return (noticia.foto)?
                            this.drawCard(noticia):
                            this.drawCardNoPicture(noticia)
                    })}
                </ScrollView>
                
            </View>
        );

    }


}

export default Newsfeed;