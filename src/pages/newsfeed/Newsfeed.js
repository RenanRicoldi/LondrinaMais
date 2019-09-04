import React, {Component} from 'react'
import {View,
        FlatList,
        Text,
        Image,
        TouchableNativeFeedback,
        ActivityIndicator} from 'react-native'
import axios from 'axios'
import { imageURL } from '../../utils/ImageURL'
import { resumoNoticia } from '../../utils/NewsDescription'
import Styles from './Styles'

class Newsfeed extends Component {

    constructor(){
        super();

        this.state = {
            news: [],
            loading: true,
            done: true
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios
        .get('https://ieeeuel.org/_functions/api/lndmais-newsfeed')
        .then(response => {
            const { newsFeed } = response.data
            this.setState({
                news: newsFeed,
                loading: false,
                done: true
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false, done: false})
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
        if( !this.state.loading && this.state.done ){
            return(
                <View style={Styles.container}>
                    <FlatList styles = { Styles.wrapper } data={ this.state.news } renderItem={({ item }) => (
                        item.foto ? this.drawCard(item) : this.drawCardNoPicture(item) 
                    )}
                    keyExtractor = {item => item._id} />
                </View>
            )
        } else if ( !this.state.loading && !this.state.done ) {
            return(
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#97DB4F', flex: 1 }}>
                    <Text style={ { fontSize: 15 }}>Não foi possível baixar os dados</Text>
                    <Text style={{ fontSize: 20 }}>Cheque sua internet</Text>  
                </View>
            )
        } else if ( this.state.loading ){
            return(
                <View style={[Styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                    <ActivityIndicator size='large' color='#d9d9d9' />
                </View>
            )
        }
    }
}

export default Newsfeed;