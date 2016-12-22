/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, ActivityIndicator, ListView, RefreshControl, Dimensions, RecyclerViewBackedScrollView} from 'react-native';

import {Post} from '../../components/Post';

import {connect} from 'react-redux'
import * as actions from './actions';


const Home = (props) => {
    const {loadPosts, loading, dataSource, toggleLike} = props;


    return (
        <ListView
            style={{backgroundColor:'#374A60', paddingTop: 22}}
            dataSource={dataSource}
            renderRow={(rowData) => <Post post={rowData} toggleLike={toggleLike}/>}
            renderFooter={() => <ActivityIndicator animating={loading}/>}
            enableEmptySections={true}
            onEndReached={loadPosts}
            renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            onLayout={() => {
                if (dataSource.getRowCount() === 0) loadPosts()
            }}
        >
        </ListView>
    )
};

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
        loadPosts: () => dispatch(actions.loadPosts()),
        toggleLike: (post) => dispatch(actions.toggleLikePost(post))
    })
)(Home)