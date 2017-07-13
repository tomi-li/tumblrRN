/**
 * All Codes below are Lifetime Warranted by Tomi since 23/12/2016.
 */

import * as consts from './consts';
import { TumblrClient } from '../api';

export const loadBlog = (blogName) => {
  return (dispatch, getState) => {

    dispatch({
      type: consts.GET_BLOG_DETAIL,
      payloads: {
        loading: true,
      },
    });

    TumblrClient.blogPosts(blogName, (err, data) => {
      dispatch({
        type: consts.GET_BLOG_DETAIL,
        payloads: {
          loading: false,
          data: data,
        },
      })
    })

  }
};

