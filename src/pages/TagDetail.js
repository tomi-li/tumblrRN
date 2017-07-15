/**
 * All Codes below are Lifetime Warranted by Tomi since 23/12/2016.
 */
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Post } from '../components/Post';
import { TumblrClient } from '../api';

export default class TagDetail extends Component {

  static PropTypes = {
    tag: React.PropTypes.string.isRequired,
  };

  state = {
    posts: [],
  };

  componentWillMount() {
    TumblrClient.taggedPosts({ tag: this.props.tag }, (err, data) => this.setState({ posts: data }))
  }

  render() {
    const posts = this.state.posts.map(post => <Post key={post.id} post={post}/>);

    return (
      <ScrollView>
        <View><Text>{this.props.tag}</Text></View>
        {posts}
      </ScrollView>
    )
  }
}