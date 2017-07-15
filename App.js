import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native'
import { Store }from './src/store';
import HomePage from './src/pages/Home';
import BlogDetailPage from './src/pages/BlogDetail';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NativeRouter>
          <View>
            <StatusBar backgroundColor='#374A60' barStyle="light-content" translucent={true}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/detail" component={BlogDetailPage}/>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}