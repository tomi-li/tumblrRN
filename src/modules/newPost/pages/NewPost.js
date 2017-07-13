/**
 * All Codes below are Lifetime Warranted by Tomi since 21/12/2016.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight, Platform, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { go } from '../../../router';

const deviceDimension = Dimensions.get('window');
const centerPoint = { x: deviceDimension.width / 2 - 35, y: (Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24) / 2 - 35 };


const Post = () => {

  const buttonsEle = renderButton(buttons);

  return (
    <View style={styles.view} onLayout={() => animationButtons(buttons)}>
      {buttonsEle}
    </View>
  )
};

Post.PropTypes = {};


function renderButton(buttons) {
  return _.map(buttons, (button, index) =>
    <Animated.View style={[styles.button_container, { left: button.offset.x, top: button.offset.y }]} key={index}>
      <TouchableHighlight style={[styles.button, { backgroundColor: button.color }]} onPress={() => go(button.route)}>
        <Icon size={24} name={button.icon}/>
      </TouchableHighlight>
      <Text style={styles.button_text}>{button.text}</Text>
    </Animated.View>,
  )
}


const styles = StyleSheet.create({
  view: {
    width: deviceDimension.width,
    height: Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24,
    backgroundColor: 'rgba(51,68,89,.98)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
  },
});


const animationButtons = (buttons) => {
  const angleStep = 360 / (buttons.length - 1);
  const radius = 120;

  Animated.stagger(100, buttons.map((button, index) => {
    let offsetX, offsetY;

    if (index === 0) {
      offsetX = 0 + centerPoint.x;
      offsetY = 0 + centerPoint.y;
    } else {
      offsetX = parseInt(radius * Math.sin(toRadians(angleStep * (index - 1)))) + centerPoint.x;
      offsetY = parseInt(radius * Math.cos(toRadians(angleStep * (index - 1)))) + centerPoint.y;
    }

    return Animated.timing(button.offset, {
      toValue: { x: offsetX, y: offsetY },
      duration: 320,
      easing: Easing.cubic,
    })
  })).start();

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }
};


const getCenter = () => new Animated.ValueXY({ x: centerPoint.x, y: centerPoint.y });
const buttons = [{
  text: 'photo',
  icon: 'camera',
  color: '#D95E3F',
  offset: getCenter(),
  route: 'PickPhoto',
}, {
  text: 'Chat',
  icon: 'bubbles',
  color: '#529ECD',
  offset: getCenter(),
}, {
  text: 'Quota',
  icon: 'speech',
  color: '#F1992D',
  offset: getCenter(),
}, {
  text: 'Link',
  icon: 'link',
  color: '#56BC8A',
  offset: getCenter(),
}, {
  text: 'Audio',
  icon: 'earphones',
  color: '#A67DC1',
  offset: getCenter(),
}, {
  text: 'Text',
  icon: 'book-open',
  color: '#FDFEFC',
  offset: getCenter(),
  route: 'newTextPost',
}, {
  text: 'Video',
  icon: 'film',
  color: '#73808A',
  offset: getCenter(),
}];


export default connect(
  (state) => ({}),
  (dispatch) => ({}),
)(Post);
