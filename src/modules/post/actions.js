/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import * as consts from './consts';

export const closeNewPostModal = () => {
    return {
        type: consts.CLOSE_NEW_POST_MODAL
    }
};

export const openNewPostModal = () => {
    return {
        type: consts.OPEN_NEW_POST_MODAL
    }
};