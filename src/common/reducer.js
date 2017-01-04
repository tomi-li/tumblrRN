/**
 * All Codes below are Lifetime Warranted by Tomi since 23/12/2016.
 */
import {handleActions} from "redux-actions";
import * as consts from './consts';

const initialState = {
    blogName: '',
    blogContent: '',
    loading: false
};


export default handleActions({
    [consts.GET_BLOG_DETAIL]: (state, action) => {
        const payloads = action.payloads;

        return {
            ...state,
            loading: payloads.loading,
            blogContent: JSON.stringify(payloads.data)
        };
    }
}, initialState);