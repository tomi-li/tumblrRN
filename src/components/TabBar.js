/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import _ from 'lodash';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const tabs = [
    {
        title: 'Home',
        icon: 'home'
    }, {
        title: 'Explore',
        icon: 'compass'
    }, {
        title: 'Post',
        icon: 'pencel'
    }, {
        title: 'Profile',
        icon: 'user'
    }
];

const deviceDimension = Dimensions.get('window');


export const TabBar = (props) => {

    const {switchTab, children} = props;
    const tabArray = renderTabs(switchTab);

    return (
        <View style={{width: deviceDimension.width, height: deviceDimension.height}}>
            <View style={styles.tabContent}>
                {children}
            </View>
            <View style={styles.tabBar}>
                {tabArray}
            </View>
        </View>
    )

};

function renderTabs(switchTab) {
    return _.map(tabs, tab => {
        return (
            <TouchableHighlight style={styles.tab} onPress={() => switchTab(tab.title)} key={tab.title}>
                <View>
                    <Icon name="compass" size={20}/>
                    <Text>{tab.title}</Text>
                </View>
            </TouchableHighlight>
        )
    })
}

TabBar.propTypes = {
    switchTab: React.PropTypes.func.isRequired
};


const styles = StyleSheet.create({
    tabBar: {
        width: deviceDimension.width,
        position: 'absolute',
        height: 60,
        backgroundColor: '#334459',
        flexDirection: 'row',
        bottom: 0
    },
    tab: {
        flex: 1,
        height: 60,
    },
    tabContent: {
        width: deviceDimension.width,
        height: deviceDimension.height - 60,
        position: 'absolute'
    }
});