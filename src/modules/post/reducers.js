/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import {handleActions} from 'redux-actions';
import * as consts from './consts';

const initialState = {
    modalVisible: true
};

export default handleActions({
    [consts.CLOSE_NEW_POST_MODAL]: (state, action) => {
        return {
            ...state,
            modalVisible: false
        }
    },
    [consts.OPEN_NEW_POST_MODAL]: (state, action) => {
        return {
            ...state,
            modalVisible: true
        }
    }
}, initialState);