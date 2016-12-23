/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import React, {Component} from 'react';
import {Button, ScrollView, Text, StyleSheet, Platform, Image, ActivityIndicator} from 'react-native';
import {back} from '../../router';
import {connect} from "react-redux";
import * as actions from '../actions';

const BlogDetail = (props) => {

    // from navigator
    const {blogName} = props;
    const {loading, loadBlog, blogContent} = props;

    return (
        <ScrollView
            onLayout={() => loadBlog(blogName)}>
            <Text> NAME: {blogName}</Text>
            <ActivityIndicator animating={loading}/>
            <Button title="back" onPress={back}/>
            <Text>{blogContent}</Text>
        </ScrollView>
    )
};

BlogDetail.PropTypes = {
    blogName: React.PropTypes.string.isRequired,
    loadBlog: React.PropTypes.func.isRequired
};


export default connect(
    (state) => ({
        loading: state.common.loading,
        blogContent: state.common.blogContent
    }),
    (dispatch) => ({
        loadBlog: (blogName) => dispatch(actions.loadBlog(blogName))
    })
)(BlogDetail);