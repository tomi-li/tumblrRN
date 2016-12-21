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
        icon: 'pencil'
    }, {
        title: 'Message',
        icon: 'comment'
    }, {
        title: 'Profile',
        icon: 'torso'
    }
];

const deviceDimension = Dimensions.get('window');


export const TabBar = (props) => {

    const {switchTab, children, currentTab} = props;
    const tabArray = renderTabs(switchTab, currentTab);

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

function renderTabs(switchTab, currentTab) {
    return _.map(tabs, tab => {
        console.log(_.merge({}, styles.tabCurrent, styles.tab));
        console.log(tab);
        console.log(currentTab);
        return (
            <TouchableHighlight style={styles.tab} underlayColor='rgba(0,0,0,.2)' activeOpacity={.85} onPress={() => switchTab(tab.title)} key={tab.title}>
                <Icon
                    style={tab.title === 'Post' ? styles.tabPencil : undefined}
                    name={tab.icon}
                    size={30}
                    color={tab.title === currentTab ? '#FDFDFD' : '#9BA3AE'}/>
            </TouchableHighlight>
        )
    })
}

TabBar.propTypes = {
    switchTab: React.PropTypes.func.isRequired,
    currentTab: React.PropTypes.string.isRequired
};


const styles = StyleSheet.create({
    tabBar: {
        width: deviceDimension.width,
        position: 'absolute',
        height: 52,
        backgroundColor: '#334459',
        flexDirection: 'row',
        bottom: 0
    },
    tab: {
        flex: 1,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabPencil: {
        paddingVertical: 1,
        paddingHorizontal: 12,
        borderRadius: 5,
        backgroundColor: '#529ECD',
        overflow: 'hidden',
        color: '#334459'
    },
    tabContent: {
        width: deviceDimension.width,
        height: deviceDimension.height - 52,
        position: 'absolute'
    }
});