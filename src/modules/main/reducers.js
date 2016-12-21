/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import {handleActions} from 'redux-actions';
import * as consts from './consts';

const initialState = {
    currentTab: 'Home',
};

export default handleActions({
    [consts.SWITCH_TAB]: (state, action) => {
        return {
            ...state,
            currentTab: action.tab
        }
    }
}, initialState);

