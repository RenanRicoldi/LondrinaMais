import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';

import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';

const USE_NATIVE_DRIVER = true

export class Mapa extends React.Component {
  panRef = React.createRef()
  rotationRef = React.createRef()
  pinchRef = React.createRef()
  constructor(props) {
    super(props)

    /* Pinching */
    this._baseScale = new Animated.Value(1)
    this._pinchScale = new Animated.Value(0.09)
    this._scale = Animated.multiply(this._baseScale, this._pinchScale)
    this._lastScale = 1
    this._onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this._pinchScale } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );

    /* Rotation */
    this._rotate = new Animated.Value(0);
    this._rotateStr = this._rotate.interpolate({
      inputRange: [-100, 100],
      outputRange: ['-100rad', '100rad'],
    })
    this._lastRotate = 0
    this._onRotateGestureEvent = Animated.event(
      [{ nativeEvent: { rotation: this._rotate } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    )

    /* Tilt */
    this._tilt = new Animated.Value(0)
    this._tiltStr = this._tilt.interpolate({
      inputRange: [-501, -500, 0, 1],
      outputRange: ['1rad', '1rad', '0rad', '0rad'],
    })
    this._lastTilt = 0
    this._onTiltGestureEvent = Animated.event(
      [{ nativeEvent: { translationY: this._tilt } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    )

    /* Translation */
    this._translateX = new Animated.Value(0)
    this._translateY = new Animated.Value(0)
    this._lastOffset = { x: 0, y: 0 }
    this._onGestureEvent = Animated.event(
        [
          {
            nativeEvent: {
              translationX: this._translateX,
              translationY: this._translateY,
            },
          },
        ],
        { useNativeDriver: USE_NATIVE_DRIVER }
      ) 
  }

  _onRotateHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastRotate += event.nativeEvent.rotation;
      this._rotate.setOffset(this._lastRotate);
      this._rotate.setValue(0);
    }
  }

  _onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastScale *= event.nativeEvent.scale;
      this._baseScale.setValue(this._lastScale);
      this._pinchScale.setValue(1);
    }
  }

  _onTiltGestureStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastTilt += event.nativeEvent.translationY;
      this._tilt.setOffset(this._lastTilt);
      this._tilt.setValue(0);
    }
  }

  _onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.x += event.nativeEvent.translationX;
      this._lastOffset.y += event.nativeEvent.translationY;
      this._translateX.setOffset(this._lastOffset.x);
      this._translateX.setValue(0);
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
    }
  }

  render() {
    return (
      <PanGestureHandler
        ref={this.panRef}
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}>
        <Animated.View
          style={[
            styles.wrapper,
            {
              transform: [
                { translateX: this._translateX },
                { translateY: this._translateY },
              ],
            }
          ]}
        >
          <RotationGestureHandler
            ref={this.rotationRef}
            simultaneousHandlers={this.pinchRef}
            onGestureEvent={this._onRotateGestureEvent}
            onHandlerStateChange={this._onRotateHandlerStateChange}>
            <Animated.View style={styles.wrapper}>
              <PinchGestureHandler
                ref={this.pinchRef}
                simultaneousHandlers={this.rotationRef}
                onGestureEvent={this._onPinchGestureEvent}
                onHandlerStateChange={this._onPinchHandlerStateChange}>
                <Animated.View style={styles.container} collapsable={false}>
                  <Animated.Image
                    style={[
                      styles.pinchableImage,
                      {
                        transform: [
                          { perspective: 10 },
                          { scale: this._scale },
                          { rotate: this._rotateStr },
                          { rotateX: this._tiltStr },
                        ],
                      },
                    ]}
                    source={require('../../../assets/images/Mapas/MapaGeral.jpg')}
                  />
                </Animated.View>
              </PinchGestureHandler>
            </Animated.View>
          </RotationGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default Mapa;

const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pinchableImage: {
    
  },
  wrapper: {
    flex:1,
  },
});