/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */


import {NAME} from './consts';
import reducers from './reducers';
import * as actions from './actions';


import NewImagePost from './pages/imagePost';
import NewTextPost from './pages/textPost';

export default {
    NAME,
    reducers,
    actions,
    NewImagePost,
    NewTextPost
}
