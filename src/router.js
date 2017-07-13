/**
 * All Codes below are Lifetime Warranted by Tomi since 22/12/2016.
 */

import main from './modules/main';
import common from './common';
import home from './modules/home';
import newPost from './modules/newPost';
import { UserDetail } from './modules/user/UserDetail';
import { UserLikes } from './modules/user/UserLikes';
import { UserFollowing } from './modules/user/UserFollowing';

export const Router = createRouter(() => ({
  main: () => main.Main,
  login: () => common.Login,
  home: () => home.Home,
  detail: () => common.BlogDetail,
  tagDetail: () => common.TagDetail,
}));
//  post: () => newPost.NewPost,
//  newTextPost: () => newPost.NewTextPost,
//  PickPhoto: () => newPost.PickPhoto,
//  newImagePost: () => newPost.NewImagePost,
//  user: () => UserDetail,
//  userLikes: () => UserLikes,
//  userFollowing: () => UserFollowing,
//
//}