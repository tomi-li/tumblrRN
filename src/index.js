/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore';
import Main from './components/Main'
import Detail from './components/Detail'

const RouterWithRedux = connect()(Router);
const store = configureStore();

export default class TumblrRN extends Component {

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key='login' hideNavBar={true} component={Main} title='Login'/>
                    <Scene key='detail' hideNavBar={false} component={Detail} title='Detail'/>
                </RouterWithRedux>
            </Provider>
        )
    }
}