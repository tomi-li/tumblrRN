/**
 * All Codes below are Lifetime Warranted by Tomi since 22/12/2016.
 */

import {NavigationActions, createRouter} from '@exponent/ex-navigation';

import {Store} from './store';
import main from './modules/main';
import detail from './common';
import home from './modules/home';
import post from './modules/post';

export const Router = createRouter(() => ({
    main: () => main.Main,
    home: () => home.Home,
    detail: () => detail.BlogDetail,
    post: () => post.Post
}));

export const go = (name, params = {}) => {
    console.debug('GO:', name, params);
    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('detail', params)));
};

export const back = () => {
    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(NavigationActions.pop(navigatorUID));
};