/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import * as consts from './consts';
import _ from 'lodash';
import {Animated, Dimensions, Platform, Easing} from 'react-native';


const deviceDimension = Dimensions.get('window');
const centerPoint = {x: deviceDimension.width / 2 - 35, y: (Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24) / 2 - 35};


export const animationButtons = (buttons) => {
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
            toValue: {x: offsetX, y: offsetY},
            duration: 320,
            easing: Easing.cubic
        })
    })).start();

    return {
        type: consts.ANIMATION_BUTTONS,
        buttons: buttons
    };

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
};


export const buttonAnimationOnPress = (button) => {
    return {
        type: consts.ANIMATION_BUTTON_PRESS
    }
};