/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */
import {ActionConst} from 'react-native-router-flux'

const DEFAULT_STATE = {scene: {}}

export default function reducer(state = DEFAULT_STATE, action = {}) {
    switch(action.type) {
        // focus action is dispatched when a new screen comes into focus
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene,
            }

        default:
            return state
    }
}

// Selectors (mapStateToProps)
export const getNav = ({scene}) => ({
    scene
});