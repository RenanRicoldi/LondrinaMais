import React, {Component} from 'react'
import {View,
        Text,
        Image,
        ScrollView} from 'react-native'
import Styles from './Styles'

class Newsfeed extends Component {

    constructor(props){
        super(props);

    }

    drawNews(info){
        return(
            <View style={Styles.newsView}>
                <Image style={Styles.newsImage} source={ {uri: info.imgURL } }></Image>
                <ScrollView style={Styles.newsContent}>
                    <Text style={Styles.newsTitle}>{info.titulo}</Text>
                    <Text style={Styles.newsText}>{info.texto}</Text>
                </ScrollView>
            </View>              
        );
    }

    drawNewsNoPicture(info){
        return(
            <ScrollView style={Styles.newsContent}>
                <Text style={Styles.newsTitle}>{info.titulo}</Text>
                <Text style={Styles.newsText}>{info.texto}</Text>
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

export default Newsfeed