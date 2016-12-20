/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import * as consts from './consts';

export const switchTab = (tab) => {
    return {
        type: consts.SWITCH_TAB,
        tab: tab
    }
};