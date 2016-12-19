/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    ListView,
    Dimensions,
    Text
} from 'react-native';
import _ from 'lodash';


import {TumblrClient} from '../../api';
import PostView from '../../components/Post';

import {connect} from 'react-redux'
import * as actions from './actions';


const Home = (props) => {
    const {loadPosts, loading, dataSource} = props;

    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <ListView style={styles.TimeLine}
                      dataSource={dataSource}
                      renderRow={(rowData) => <PostView post={rowData}></PostView>}
                      renderFooter={() => <ActivityIndicator animating={loading} />}
                      enableEmptySections={true}
                      onEndReached={() => loadPosts()}>
            </ListView>
        </View>
    )
}

let styles = StyleSheet.create({
    TimeLine: {
        backgroundColor: '#374A60'
    }
});


Home.propsType = {
    loading: PropTypes.bool.isRequired,
    loadPost: PropTypes.func.isRequired
};

export default connect(
    (state) => ({
        loading: state.home.loading,
        posts: state.home.posts,
        dataSource: state.home.dataSource,
        ds: state.home.ds,
        page: state.home.page,
        size: state.home.size
    }),
    (dispatch) => ({
        loadPosts: () => dispatch(actions.test())
    })
)(Home)