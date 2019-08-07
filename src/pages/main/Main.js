import React, { Component } from 'react'
import { View, Text, Image, StatusBar, Dimensions, Animated } from 'react-native'   
import { PanGestureHandler, State, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Styles, { Icone } from './Styles'
import Timer from '../../components/timer/Timer'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'
import Newsfeed from '../newsfeed/Newsfeed'
import NewsFeedContent from '../../components/newsContent/News'
import Palestrantes from '../palestrantes/Palestrantes'
import PalDetails from '../../components/palestrantesDetails/Detalhes'
import Cronograma from '../cronograma/Cronograma'
import Expositores from '../expositoresEscolares/Expositores'

class Main extends Component {

    measureMenuMargin(){

        if(StatusBar.currentHeight > 30)
            return Dimensions.get("window").height - StatusBar.currentHeight
        else
            return Dimensions.get("window").height - (StatusBar.currentHeight*2)
    
    }

    render(){
        let offSet = 0

        let height = Dimensions.get('window').height

        const transY = new Animated.Value(0)

        const animatedEvent = Animated.event(
            [{ nativeEvent:{ translationY: transY } }], { useNativeDriver: true })
        
        function onHandlerStateChanged(event){
            if (event.nativeEvent.oldState === State.ACTIVE) {
                let opened = false
                const { translationY } = event.nativeEvent

                offSet += translationY

                if (translationY < -1 && translationY >= -height + (height/9)){
                    opened = true
                } else {
                    transY.setValue(offSet)
                    transY.setOffset(0)
                    offSet = 0
                }

                Animated.timing(transY, {
                    toValue: opened ? -height + (height/20) : 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start(() => {
                    offSet = opened ? -height + (height/20) : 0
                    transY.setOffset(offSet)
                    transY.setValue(0)
                })

            }
        }

        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor='#97DB4F'/>
                <View style={Styles.MainScreen}>
                    <Logo transY={ transY } />
                    <Timer transY={ transY } />
                    <View style={{flex: 1, marginTop: this.measureMenuMargin(), position: 'absolute', alignItems: 'center', backgroundColor: '#97DB4F'}}>
                        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged} >
                            <Animated.View  
                                style={[{
                                    transform: [{
                                        translateY: transY.interpolate({
                                            inputRange: [ -height, 0],
                                            outputRange: [ -height + (height/20), 0],
                                            extrapolate: 'clamp',
                                        }),
                                    }],
                                },{
                                    width: 90,
                                    height: 50,
                                    alignItems: 'center',
                                    zIndex: 5
                                }]}
                            >
                                <Animated.Image source = {require('../../../assets/icons/expand/Icon.png')} style={{
                                    transform: [{rotate: transY.interpolate({
                                        inputRange: [ -height + (height/5), 0],
                                        outputRange: ['180 deg', '0 deg'],
                                        extrapolate: 'clamp'})},
                                    {perspective: 1000},
                                    ],
                                }}/>
                            </Animated.View>
                        </PanGestureHandler>
                        <Menu transY={ transY } navigation={ this.props.navigation }/>    
                    </View>            
                </View>
            </>
        )
    }
}

const MainNavigator = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            header: null
        })
    },
    Palestrantes: {
        screen: Palestrantes,
        navigationOptions: () => ({
            header: null
        })
    },
    DetalhesPalestrantes: {
        screen: PalDetails,
        navigationOptions: () => ({
            header: null
        })
    },
    NewsFeed: {
        screen: Newsfeed,
        navigationOptions: () => ({
            header: null
        })
    },
    NewsFeedContent: {
        screen: NewsFeedContent,
        navigationOptions: () => ({
            header: null
        })
    },
    Cronograma: {
        screen: Cronograma,
        navigationOptions: () => ({
            header: null
        })
    },
    Expositores: {
        screen: Expositores,
        navigationOptions: () => ({
            header: null
        })
    }
  },
  {
    initialRouteName: 'Main',
  },
  {
      header: null
  });
  
const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
}