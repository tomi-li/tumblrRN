/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import {combineReducers} from 'redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {createNavigationEnabledStore, NavigationReducer} from '@exponent/ex-navigation';

import home from './modules/home';
import main from './modules/main';
import post from './modules/post';

const createStoreWithNavigation = createNavigationEnabledStore({
    createStore,
    navigationStateKey: 'navigation',
});

function configureStore(initialState: any = undefined) {
    const logger = createLogger();
    const enhancer = compose(
        applyMiddleware(thunk, logger)
    );
    const rootReducer = combineReducers({
        navigation: NavigationReducer,
        [home.NAME]: home.reducers,
        [main.NAME]: main.reducers,
        [post.NAME]: post.reducers
    });
    return createStoreWithNavigation(rootReducer, initialState, enhancer);
}

const Store = configureStore();

export {Store};