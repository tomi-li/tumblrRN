/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import React, {Component} from 'react';
import {StyleSheet, Text, View, TabBarIOS, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

import Timeline from './Home';
export default class Main extends Component {

    state = {
        selectedTab: 'tabOne',
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
                    selected={this.state.selectedTab === 'tabOne'}
                    onPress={() => this.setTab('tabOne')}>
                    <Timeline></Timeline>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="magnifying-glass"
                    title="Search"
                    selected={this.state.selectedTab === 'tabTwo'}
                    onPress={() => this.setTab('tabTwo')}>
                    <View style={styles.tabContent}><Text style={styles.tabText}>tab Two</Text></View>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="pencil"
                    title="New"
                    selected={this.state.selectedTab === 'tabThree'}
                    onPress={() => this.setTab('tabThree')}>
                    <View style={styles.tabContent}><Text style={styles.tabText}>tab Three</Text></View>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="torso"
                    title="Profile"
                    selected={this.state.selectedTab === 'tabFour'}
                    onPress={() => this.setTab('tabFour')}>
                    <View style={styles.tabContent}><Text style={styles.tabText}>tab Four</Text></View>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName="mountains"
                    title="Unknown"
                    selected={this.state.selectedTab === 'tabFive'}
                    onPress={() => this.setTab('tabFive')}>
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
