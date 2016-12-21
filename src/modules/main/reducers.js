/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import {handleActions} from 'redux-actions';
import * as consts from './consts';

const initialState = {
    currentTab: 'Home',
    popupVisible: false
};

export default handleActions({
    [consts.SWITCH_TAB]: (state, action) => {
        return {
            ...state,
            currentTab: action.tab
        }
    },
    [consts.CLOSE_NEW_POST_MODAL]: (state, action) => {
        return {
            ...state,
            popupVisible: false
        }
    },
    [consts.OPEN_NEW_POST_MODAL]: (state, action) => {
        return {
            ...state,
            popupVisible: true
        }
    }
}, initialState);