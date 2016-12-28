/**
 * All Codes below are Lifetime Warranted by Tomi since 21/12/2016.
 */

import React from 'react';
import {StyleSheet, Modal, View, Text, Dimensions, Button, TouchableHighlight, LayoutAnimation, Platform, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from './actions';
import _ from 'lodash';
import {connect} from "react-redux";
import {go} from '../../router';

const deviceDimension = Dimensions.get('window');

const PostModal = (props) => {

    const {animationButtons, buttons, animationOnPress} = props;

    console.log(props);

    const buttonsEle = renderButton(buttons, animationOnPress);

    return (
        <View style={styles.modalStyle} onLayout={() => animationButtons(buttons)}>
            {buttonsEle}
        </View>
    )

};

PostModal.PropTypes = {};

function renderButton(buttons, animationOnPress) {

    const array = _.map(buttons, (button, index) => {

        return (
            <Animated.View style={[styles.button_container, {left : button.offset.x,  top: button.offset.y}]} key={index}>
                <TouchableHighlight style={[styles.button, {backgroundColor : button.color}]} onPress={() => go('newTextPost')}>
                    <Icon size={24} name={button.icon}/>
                </TouchableHighlight>
                <Text style={styles.button_text}>{button.text}</Text>
            </Animated.View>
        )
    });

    return array;
}

const styles = StyleSheet.create({
    modalStyle: {
        width: deviceDimension.width,
        height: Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24,
        backgroundColor: 'rgba(51,68,89,.98)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        width: deviceDimension.width,
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButtonColor: {
        color: '#8D98A6',
        fontSize: 18
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',

    },
    button_text: {
        color: 'white'
    }
});

export default connect(
    (state) => ({
        modalVisible: state.post.modalVisible,
        buttons: state.post.buttons
    }),
    (dispatch) => ({
        animationOnPress: (button) => dispatch(actions.buttonAnimationOnPress(button)),
        animationButtons: (buttons) => dispatch(actions.animationButtons(buttons))
    })
)(PostModal);
