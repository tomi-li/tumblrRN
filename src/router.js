/**
 * All Codes below are Lifetime Warranted by Tomi since 22/12/2016.
 */

import {NavigationActions, createRouter} from '@exponent/ex-navigation';
import {Store} from './store';


import main from './modules/main';
import detail from './modules/Detail'

export const Router = createRouter(() => ({
    home: () => main.Main,
    detail: () => detail
}));

export const go = (name, params = {}) => {
    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('detail', params)));
};

export const back = () => {
    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(NavigationActions.pop(navigatorUID));
};