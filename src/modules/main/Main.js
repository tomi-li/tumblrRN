/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */
import  React from 'react';
import {connect} from "react-redux";
import {View, Text} from 'react-native';
import * as actions from './actions';

import home  from '../home';
import {TabBar} from '../../components/TabBar';

const Main = (props) => {
    const {currentTab, switchTab} = props;
    const content = renderContent(currentTab);

    return (
        <TabBar switchTab={switchTab}>
            {content}
        </TabBar>
    )
};

function renderContent(currentTab) {
    console.log(currentTab);
    switch(currentTab) {
        case 'Home':
            return <home.Home />;
        default:
            return <Text>empty</Text>
    }
}


export default connect(
    (state) => ({
        currentTab: state.main.currentTab
    }),
    (dispatch) => ({
        switchTab: (tab) => dispatch(actions.switchTab(tab))
    })
)(Main)