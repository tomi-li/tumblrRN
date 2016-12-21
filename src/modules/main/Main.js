/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */
import  React from 'react';
import {connect} from "react-redux";
import {View, StatusBar, Text, StyleSheet} from 'react-native';
import * as actions from './actions';

import home  from '../home';
import {TabBar} from '../../components/TabBar';

const Main = (props) => {
    const {currentTab, switchTab, popupVisible, closeNewPostModal, openNewPostModal} = props;

    return (
        <TabBar
            switchTab={switchTab}
            currentTab={currentTab}
            popupVisible={popupVisible}
            closeNewPostModal={closeNewPostModal}
            openNewPostModal={openNewPostModal}>

            <StatusBar barStyle="light-content"/>
            <View style={currentTab ==='Home' ?styles.visiable : styles.invisiable}>
                <home.Home />
            </View>
            <View style={currentTab !=='Home' ?styles.visiable : styles.invisiable}>
                <Text>{currentTab}</Text>
            </View>
        </TabBar>
    )
};

export default connect(
    (state) => ({
        currentTab: state.main.currentTab,
        popupVisible: state.main.popupVisible
    }),
    (dispatch) => ({
        switchTab: (tab) => dispatch(actions.switchTab(tab)),
        closeNewPostModal: () => dispatch(actions.closeNewPostModal()),
        openNewPostModal: () => dispatch(actions.openNewPostModal())
    })
)(Main);


const styles = StyleSheet.create({
    visiable: {
        height: null
    },
    invisiable: {
        height: 0
    }
});