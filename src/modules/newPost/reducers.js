/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */

import * as consts  from './consts';
import { handleActions } from 'redux-actions';


const initialState = {};

export default handleActions({
  [consts.NEW_TEXT_POST]: (state, action) => {
    return {
      ...state
    }
  },
}, initialState)