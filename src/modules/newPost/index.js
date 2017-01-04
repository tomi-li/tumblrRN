/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */


import {NAME} from './consts';
import reducers from './reducers';
import * as actions from './actions';


import NewPost from './pages/NewPost';
import NewImagePost from './pages/NewImagePost';
import NewTextPost from './pages/NewTextPost';

export default {
    NAME,
    reducers,
    actions,
    NewPost,
    NewImagePost,
    NewTextPost
}
