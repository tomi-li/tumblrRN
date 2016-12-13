/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */
import * as actionTypes from '../actionTypes'

// Reducer
const DEFAULT_STATE = {onLoggin: false}
export default function (state = DEFAULT_STATE, action) {
    switch(action.type) {
        case actionTypes.ON_LOGGIN:
            return {...state, onLogging: true}
        default:
            return state
    }
}

// Selectors (mapStateToProps)
export const getLogin = ({onLogging}) => ({
    onLogging
})