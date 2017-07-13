/**
 * All Codes below are Lifetime Warranted by Tomi since 23/12/2016.
 */


import * as actions from './actions';
import reducers from './reducer';
import { NAME } from './consts';
import BlogDetail from './pages/BlogDetail';
import TagDetail from './pages/TagDetail';
import { Login } from './pages/Login';

export default {
  NAME,
  actions,
  reducers,
  BlogDetail,
  TagDetail,
  Login,
};