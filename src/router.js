/**
 * All Codes below are Lifetime Warranted by Tomi since 22/12/2016.
 */

import {NavigationActions, createRouter} from '@exponent/ex-navigation';

import {Store} from './store';
import main from './modules/main';
import common from './common';
import home from './modules/home';
import newPost from './modules/newPost';
import {UserDetail} from './modules/user/UserDetail';
import {UserLikes} from './modules/user/UserLikes';
import {UserFollowing} from './modules/user/UserFollowing';

export const Router = createRouter(() => ({
    main: () => main.Main,
    home: () => home.Home,
    detail: () => common.BlogDetail,
    tagDetail: () => common.TagDetail,
    post: () => newPost.NewPost,
    newTextPost: () => newPost.NewTextPost,
    newImagePost: () => newPost.NewImagePost,
    user: () => UserDetail,
    userLikes: () => UserLikes,
    userFollowing: () => UserFollowing
}));

export const go = (name, params = {}) => {
    console.debug('GO:', name, params);
    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute(name, params)));
};

export const back = () => {
    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(NavigationActions.pop(navigatorUID));
};