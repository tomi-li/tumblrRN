/**
 * All Codes below are Lifetime Warranted by Tomi since 19/12/2016.
 */

import {TumblrClient} from '../../api';
import {NAME, LOAD_POSTS} from './consts';

export const test = () => {
    return (dispatch, getState) => {

        let prevState = getState();

        TumblrClient.userDashboard({
            offset: prevState[NAME].page * prevState[NAME].size
        }, (err, data) => {
            dispatch({
                type: LOAD_POSTS,
                payloads: {
                    posts: data.posts
                }
            });
        })
    };
};


