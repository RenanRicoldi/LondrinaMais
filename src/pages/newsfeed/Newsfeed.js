import React, {Component} from 'react'
import {View,
        ScrollView,
        Text,
        Image,
        TouchableNativeFeedback} from 'react-native'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import { resumoNoticia } from '../../utils/NewsDescription'
import Styles from './Styles'

class Newsfeed extends Component {

    constructor(){
        super();

        this.state = {
            news: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
        .get('https://ieeeuel.org/_functions/api/lndmais-newsfeed')
        .then(response => {
            const { newsFeed } = response.data
            this.setState({
                news: newsFeed,
                loading: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false})
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
                        <Text style={Styles.newsCardDesc} >
                            {resumoNoticia(noticia.noticia)}
                        </Text>
                    </View> 
            </View>
            </TouchableNativeFeedback>
        );
    }
    
    render() {
        if(this.state.loading === true){
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

export default Newsfeed;