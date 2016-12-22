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
                    <StackNavigation initialRoute='main'/>
                </NavigationProvider>
            </Provider>
        )
    }
}