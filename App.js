import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, View, Text, Button, DrawerLayoutAndroid } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'
import { Store }from './src/store';
import HomePage from './src/pages/Home';
import BlogDetailPage from './src/pages/BlogDetail';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NativeRouter>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => <Text>123</Text>}>
            <View>
              <StatusBar backgroundColor='#374A60' barStyle="light-content" translucent={true}/>
              <Route exact path="/" component={HomePage}/>
              <Route path="/detail" component={BlogDetailPage}/>
            </View>
          </DrawerLayoutAndroid>
        </NativeRouter>
      </Provider>
    )
  }
}