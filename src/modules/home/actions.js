/**
 * All Codes below are Lifetime Warranted by Tomi since 19/12/2016.
 */

import {TumblrClient} from '../../api';
import {NAME, LOAD_POSTS, LOADING, POST_LIKE} from './consts';

export const loadPosts = () => {
    return (dispatch, getState) => {

        let prevState = getState();

        // if already loading. skip
        if (prevState.loading) return;

        dispatch({
            type: LOADING,
            status: true
        });

        TumblrClient.userDashboard({
            offset: prevState[NAME].page * prevState[NAME].size
        }, (err, data) => {
            dispatch({
                type: LOAD_POSTS,
                payloads: {
                    posts: data.posts
                }
            });

            dispatch({
                type: LOADING,
                status: false
            });
        })
    };
};

export const toggleLikePost = (post) => {
    return (dispatch, getState) => {

        dispatch({
            type: POST_LIKE,
            payloads: {
                post: post,
                value: !post.liked
            }
        });

        post.liked ?
            TumblrClient.unlikePost({
                id: post.id,
                reblog_key: post.reblog_key
            }, () => {
            })
            :
            TumblrClient.likePost({
                id: post.id,
                reblog_key: post.reblog_key
            }, () => {
            });

    }
};