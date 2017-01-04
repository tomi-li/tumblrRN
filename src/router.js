/**
 * All Codes below are Lifetime Warranted by Tomi since 22/12/2016.
 */

import {NavigationActions, createRouter} from '@exponent/ex-navigation';

import {Store} from './store';
import main from './modules/main';
import detail from './common';
import home from './modules/home';
import newPost from './modules/newPost';

export const Router = createRouter(() => ({
    main: () => main.Main,
    home: () => home.Home,
    detail: () => detail.BlogDetail,
    post: () => newPost.NewPost,
    newTextPost: () => newPost.NewTextPost,
    newImagePost: () => newPost.NewImagePost,
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