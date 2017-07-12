/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native'
import { Store }from './store';
import home from './modules/home';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NativeRouter>
          <StatusBar backgroundColor='#374A60' barStyle="light-content" translucent={true}/>
          <Route exact path="/" component={home.Home}/>
        </NativeRouter>
      </Provider>
    )
  }
}