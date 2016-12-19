/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, Platform, Image} from 'react-native';
import {TumblrClient} from '../api';
import _ from 'lodash';

export default class Detail extends Component {

    state = {
        blog: {},
        posts: [],
        total_posts: 0
    };

    componentWillMount() {
        TumblrClient.blogPosts(this.props.postName, (err, data) => {
            console.log(data);
            this.setState(data)
        })
    }

    render() {
        const postNodes = _.map(this.state.posts, (post) => {
            let result;
            if (post.type === 'photo') {
                // result = _.map(post.photos, photo => {
                //     return <Image style={{width: 320, height: 100}} source={{uri:photo['original_size'].url}}/>
                // })
            }
            return result;
        });

        // console.log(postNodes);

        return (
            <ScrollView style={styles.NavigatedView}>
                <Text> NAME: {this.state.blog.title}</Text>
                {postNodes}
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    'NavigatedView': {
        paddingTop: Platform.OS === 'ios' ? 64 : 54, //nav bar height
    }
});