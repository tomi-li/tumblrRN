/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import React, {Component} from 'react';
import {StyleSheet, Text, View, TabBarIOS, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Camera from 'react-native-camera';

import home from './home';


export default class Main extends Component {

    state = {
        selectedTab: 'HomeTab',
    };

    setTab(tabId) {
        this.setState({selectedTab: tabId})
    }

    render() {
        return (
            <TabBarIOS
                barTintColor="#334459"
                tintColor="#FFFFFF"
                unselectedTintColor="#838B97"
                translucent={true}>
                <Icon.TabBarItemIOS
                    iconName="home"
                    title="Home"
                    selected={this.state.selectedTab === 'HomeTab'}
                    onPress={() => this.setTab('HomeTab')}>
                    <home.Home />
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="magnifying-glass"
                    title="Search"
                    selected={this.state.selectedTab === 'SearchTab'}
                    onPress={() => this.setTab('SearchTab')}>
                    <View style={styles.tabContent}><Text style={styles.tabText}>tab Two</Text></View>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="pencil"
                    title="New"
                    selected={this.state.selectedTab === 'PostTab'}
                    onPress={() => {this.setTab('PostTab')}}>
                    <View style={styles.tabContent}>
                        <Text style={styles.tabText}>tab Three</Text>
                        <Camera style={{ width: 300, height: 100}}
                                captureTarget={Camera.constants.CaptureTarget.disk}>
                        </Camera>
                    </View>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="torso"
                    title="Profile"
                    selected={this.state.selectedTab === 'ProfileTab'}
                    onPress={() => this.setTab('ProfileTab')}>
                    <View style={styles.tabContent}><Text style={styles.tabText}>tab Four</Text></View>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="mountains"
                    title="Unknown"
                    selected={this.state.selectedTab === 'Message'}
                    onPress={() => this.setTab('Message')}>
                    <View style={styles.tabContent}><Text style={styles.tabText}>tab Five</Text></View>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

let styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'black',
        margin: 50,
    },
});
