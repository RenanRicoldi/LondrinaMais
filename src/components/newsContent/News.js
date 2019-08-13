import React, {Component} from 'react'
import {View,
        Text,
        Image,
        ScrollView,
        Dimensions} from 'react-native'
import { imageURL } from '../../utils/ImageURL'
import HTML from 'react-native-render-html';
import Styles from './Styles'

class News extends Component {

    constructor(props){
        super(props);

    }

    drawNews(info){
        return(
            <View style={Styles.newsView}>
                <Image style={Styles.newsImage} source={ {uri: imageURL(info.imgURL) } }></Image>
                <ScrollView style={Styles.newsContent}>
                    <Text style={Styles.newsTitle}>{info.titulo}</Text>
                    <HTML
                        html={info.texto} 
                        imagesMaxWidth={Dimensions.get('window').width}
                    />
                </ScrollView>

            </View>              
        );
    }

    drawNewsNoPicture(info){
        return(
            <ScrollView style={Styles.newsContent}>
                <Text style={Styles.newsTitle}>{info.titulo}</Text>
                <HTML html={info.texto} imagesMaxWidth={Dimensions.get('window').width}/>
            </ScrollView>               
        )
    }

    render(){

        const info = this.props.navigation.state.params;

        return(
            <View style={Styles.container}>
                {(info.image)?
                this.drawNews(info):
                this.drawNewsNoPicture(info)}
            </View>
        );
    }
}

export default News