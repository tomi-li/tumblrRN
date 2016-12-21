/**
 * All Codes below are Lifetime Warranted by Tomi since 21/12/2016.
 */

import React from 'react';
import {StyleSheet, Modal, View, Text, Dimensions, Button, TouchableHighlight, LayoutAnimation, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import _ from 'lodash';

const deviceDimension = Dimensions.get('window');

export const PostModal = (props) => {

    const {modalVisible, close} = props;

    // LayoutAnimation.linear();
    const x = deviceDimension.width / 2 - 35;
    const y = (Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24) / 2 - 35;
    const buttons = renderButton({x, y});

    return (
        <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => {}}>
            <View style={styles.modalStyle}>
                {buttons}

                <TouchableHighlight underlayColor='rgba(0,0,0,.2)' style={styles.closeButton} onPress={close}>
                    <Text style={styles.closeButtonColor}>Nevermind</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    )

};

PostModal.PropTypes = {
    modalVisible: React.PropTypes.bool,
    close: React.PropTypes.func.isRequired
};

function renderButton(centralPoint) {
    const angleStep = 360 / (buttons.length - 1);
    const radius = 120;
    const {x, y} = centralPoint;

    const array = _.map(buttons, (button, index) => {
        let offsetX, offsetY;
        if (index === 0) {
            offsetX = 0;
            offsetY = 0;
        } else {
            offsetX = (radius * Math.sin(toRadians(angleStep * (index - 1)))).toFixed(3);
            offsetY = (radius * Math.cos(toRadians(angleStep * (index - 1)))).toFixed(3);
        }

        console.log(parseInt(x) - parseInt(offsetX));
        console.log(parseInt(y) - parseInt(offsetY));

        return (
            <View style={[styles.button_container, {left : parseInt(x) + parseInt(offsetX), top : parseInt(y) - parseInt(offsetY)}]} key={index}>
                <TouchableHighlight style={[styles.button, {backgroundColor : button.color}]}>
                    <Icon size={24} name={button.icon}/>
                </TouchableHighlight>
                <Text style={styles.button_text}>{button.text}</Text>
            </View>
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


const buttons =
    [{
        text: 'photo',
        icon: 'camera',
        color: '#D95E3F'
    }, {
        text: 'Chat',
        icon: 'bubbles',
        color: '#529ECD'
    }, {
        text: 'Quota',
        icon: 'speech',
        color: '#F1992D'
    }, {
        text: 'Link',
        icon: 'link',
        color: '#56BC8A'
    }, {
        text: 'Audio',
        icon: 'earphones',
        color: '#A67DC1'
    }, {
        text: 'Text',
        icon: 'book-open',
        color: '#FDFEFC'
    }, {
        text: 'Video',
        icon: 'film',
        color: '#73808A'
    }];

function toRadians(angle) {
    return angle * (Math.PI / 180);
}