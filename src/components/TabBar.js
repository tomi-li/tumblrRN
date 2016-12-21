/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import _ from 'lodash';
import React from 'react';
import {View, StyleSheet, Dimensions, TouchableHighlight, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

import {PostModal} from './PostModal';

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

    const {switchTab, children, currentTab, popupVisible, openNewPostModal, closeNewPostModal} = props;
    const tabArray = renderTabs(switchTab, currentTab, openNewPostModal);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tabContent}>{children}</View>
            <PostModal modalVisible={popupVisible} close={closeNewPostModal}/>
            <View style={styles.tabBar}>{tabArray}</View>
        </View>
    )

};

function renderTabs(switchTab, currentTab, openNewPostModal) {
    return _.map(tabs, (tab, index) => {
        return (
            <TouchableHighlight
                key={index}
                style={styles.tab}
                activeOpacity={.85}
                underlayColor='transparent'
                onPress={() => {
                    if(tab.title === 'Post'){
                        openNewPostModal()
                    }else{
                        switchTab(tab.title)
                    }
                }}>

                <Icon
                    style={tab.title === 'Post' && styles.tabPencil}
                    name={tab.icon}
                    size={32}
                    color={tab.title === currentTab ? '#FDFDFD' : '#9BA3AE'}/>
            </TouchableHighlight>
        )
    })
}

TabBar.propTypes = {
    switchTab: React.PropTypes.func.isRequired,
    currentTab: React.PropTypes.string.isRequired,
    popupVisible: React.PropTypes.bool.isRequired,
    closeNewPostModal: React.PropTypes.func.isRequired,
    openNewPostModal: React.PropTypes.func.isRequired
};


const styles = StyleSheet.create({
    mainContainer: {
        width: deviceDimension.width,
        height: Platform.OS === 'ios' ? deviceDimension.height : deviceDimension.height - 24
    },
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
        position: 'absolute',
        paddingTop: Platform.OS === 'ios' ? 20 : 0, // status bar,
        backgroundColor: '#374A60'
    }
});