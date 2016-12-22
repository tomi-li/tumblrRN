/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Store}from './store';


import {createRouter, NavigationProvider, StackNavigation, NavigationContext} from '@exponent/ex-navigation';
import {Router} from './router';


const navigationContext = new NavigationContext({
    router: Router,
    store: Store,
});

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <NavigationProvider context={navigationContext}>
                    <StackNavigation initialRoute='home'/>
                </NavigationProvider>
            </Provider>
        )
    }
}