/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, {Component} from 'react';
import {Button, ScrollView, Text, StyleSheet, Platform, Image, ActivityIndicator} from 'react-native';
import {back} from '../../router';
import {connect} from "react-redux";
import {TumblrClient} from '../../api';

class BlogDetail extends Component {

    static PropTypes = {
        blogName: React.PropTypes.string.isRequired
    };

    state = {
        loading: false,
        blog: {}
    };

    componentWillMount() {
        const blogName = this.props.blogName;

        this.setState({loading: true});
        TumblrClient.blogPosts(blogName, (err, data) => {

            this.setState({
                loading: false,
                blog: data
            });
        })
    }


    render() {
        const {blogName} = this.props;
        const {loading} = this.state;
        const {blog, posts, total_posts} = this.state.blog;

        let temp  = JSON.stringify(blog);

        return (
            <ScrollView>
                <Text> NAME: {blogName}</Text>
                <ActivityIndicator animating={loading}/>
                <Button title="back" onPress={back}/>
                <Text>{temp}</Text>
            </ScrollView>
        )
    }
}


BlogDetail.PropTypes = {
    blogName: React.PropTypes.string.isRequired,
    loadBlog: React.PropTypes.func.isRequired
};


export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(BlogDetail);


