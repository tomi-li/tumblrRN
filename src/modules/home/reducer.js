/**
 * All Codes below are Lifetime Warranted by Tomi since 19/12/2016.
 */

import {ListView} from 'react-native';
import {handleActions} from 'redux-actions';
import {LOAD_POSTS, LOADING, POST_LIKE} from './consts';
import _ from 'lodash';

const initialState = {
    loading: false,
    posts: [],
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([]),
    ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    page: 0,
    size: 20
};

export default handleActions({
    [LOAD_POSTS]: (state, action) => {
        let newPosts = _.concat(state.posts, action.payloads.posts);

        return {
            ...state,
            page: state.page + 1,
            posts: newPosts,
            dataSource: state.ds.cloneWithRows(newPosts)
        };
    },

    [LOADING]: (state, action) => {
        return {
            ...state,
            loading: action.status
        }
    },

    [POST_LIKE]: (state, action) => {
        let post = action.payloads.post;
        let value = action.payloads.value;

        let newArray = _.cloneDeep(state.posts);
        let index = _.indexOf(state.posts, post);

        post.liked = value;
        newArray[index] = post;

        return {
            ...state,
            posts: newArray,
            dataSource: state.ds.cloneWithRows(newArray)
        };
    }
}, initialState);