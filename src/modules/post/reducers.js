/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import {handleActions} from 'redux-actions';
import * as consts from './consts';
import {Animated, Dimensions, Platform} from 'react-native';


const deviceDimension = Dimensions.get('window');
const centerPoint = {x: deviceDimension.width / 2 - 35, y: (Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24) / 2 - 35};

const initialState = {
    buttons: [{
        text: 'photo',
        icon: 'camera',
        color: '#D95E3F',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }, {
        text: 'Chat',
        icon: 'bubbles',
        color: '#529ECD',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }, {
        text: 'Quota',
        icon: 'speech',
        color: '#F1992D',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }, {
        text: 'Link',
        icon: 'link',
        color: '#56BC8A',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }, {
        text: 'Audio',
        icon: 'earphones',
        color: '#A67DC1',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }, {
        text: 'Text',
        icon: 'book-open',
        color: '#FDFEFC',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }, {
        text: 'Video',
        icon: 'film',
        color: '#73808A',
        offset: new Animated.ValueXY({x: centerPoint.x, y: centerPoint.y})
    }]
};

export default handleActions({
    [consts.ANIMATION_BUTTONS]: (state, action) => {
        return {
            ...state,
            buttons: action.buttons
        }
    }
}, initialState);