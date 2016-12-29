/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */

import * as consts from './consts';
import {TumblrClient} from '../../api';

export const newTextPost = (title, body) => {

    return (dispatch, getState) => {
        dispatch({
            type: consts.LOADING
        });

        TumblrClient.userInfo({}, (err, data) => {
            if (!data) return;
            const blogName = data.user.name;

            TumblrClient.createPost(blogName, {
                type: 'Text',
                title: title,
                body: body
            }, (err, data) => {
                console.log(data);
            })
        });

    }
};


export const newImagePost = (caption: String, images: Array) => {

    return (dispatch, getState) => {

        dispatch({
            type: consts.LOADING
        });

        let formDate = new FormData();
        formDate.append('type', 'photo');
        formDate.append('caption', caption);
        formDate.append('data', images);


        TumblrClient.userInfo({}, (err, data) => {
            if (!data) return;
            const blogName = data.user.name;

            console.log(formDate);

            TumblrClient.createPost(blogName, formDate, (err, data) => {
                console.log(err);
                console.log(data);
            })
        });

    }
};