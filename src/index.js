/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {StatusBar} from 'react-native';
import {NavigationProvider, StackNavigation, NavigationContext} from '@exponent/ex-navigation';

import {Router} from './router';
import {Store}from './store';

const navigationContext = new NavigationContext({
    router: Router,
    store: Store,
});

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <NavigationProvider context={navigationContext}>
                    <StatusBar backgroundColor='#374A60' barStyle="light-content" translucent={true}/>
                    <StackNavigation initialRoute='newImagePost'/>
                </NavigationProvider>
            </Provider>
        )
    }
}


function setupFetchLogger() {
    const css = 'background: #333333; color: #ffffff';
    // fetch logger
    global._fetch = fetch;
    global.fetch = function (uri, options, ...args) {
        return global._fetch(uri, options, ...args).then((response) => {
            console.log(`%c ${options.method} %c ${uri}`, css, css, options.body, {more: {request: {options, ...args}, response}});
            return response;
        });
    };
}

setupFetchLogger();