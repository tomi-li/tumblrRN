/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, { Component } from 'react';
import { Button, ScrollView, Text, StyleSheet, Platform, Image, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { TumblrClient } from '../../api';
import Swiper from 'react-native-swiper';
import { TextButton } from '../../components/TextButton';
import { Post } from '../../components/Post';
import { NavigatorView } from '../../components/NavigatorView';

class BlogDetail extends Component {

  static PropTypes = {
    blogName: React.PropTypes.string.isRequired,
  };

  state = {
    loading: false,
    blog: {},
    activeIndex: 0,
    likedPosts: {},
  };

  componentWillMount() {
    const blogName = this.props.blogName;
    // const blogName = 'tomi-test-blog';

    this.setState({ loading: true });
    TumblrClient.blogPosts(blogName, (err, data) => {
      console.log(data);
      this.setState({ loading: false, blog: data });
      if (data.blog.share_likes) {
        this.loadBlogLikes();
      }
    });
  }

  postsPage() {
    if (this.refs.swiper.state.index === 1) this.refs.swiper.scrollBy(-1);
  }

  likesPage() {
    if (this.refs.swiper.state.index === 0) this.refs.swiper.scrollBy(1);
  }

  toggleFollow() {
    if (this.state.blog.blog.followed) {
      this.setState({
        blog: {
          ...this.state.blog,
          blog: {
            ...this.state.blog.blog,
            followed: false,
          },
        },
      });
      TumblrClient.unfollowBlog({ url: this.state.blog.blog.url }, () => {
      })
    } else {
      this.setState({
        blog: {
          ...this.state.blog,
          blog: {
            ...this.state.blog.blog,
            followed: true,
          },
        },
      });
      TumblrClient.followBlog({ url: this.state.blog.blog.url }, () => {
      })
    }
  }

  renderHeader() {
    let { blog } = this.state.blog;
    if (blog === undefined) blog = {};

    return (
      <View style={styles.header}>
        <View style={styles.header_user_info}>
          <Image style={styles.header_avatar} source={{ uri: `https://api.tumblr.com/v2/blog/${blog.name}/avatar/${30}` }}/>
          <Text style={styles.header_title}>{blog.name}</Text>
        </View>
        <TextButton color="#ffffff" onPress={() => this.toggleFollow()}>{blog.followed ? 'unfollow' : 'follow'}</TextButton>
      </View>
    )
  }

  loadBlogLikes() {
    TumblrClient.blogLikes(this.props.blogName, (err, data) => {
      console.log(data);
      this.setState({
        likedPosts: data,
      })
    })

  }

  renderContent() {
    let { blog, posts = [], total_posts } = this.state.blog;
    let { liked_posts = [], liked_count } = this.state.likedPosts;

    let postsEle = posts.map(post => <Post key={post.id} post={post}/>);
    let likeEle = liked_posts.map(post => <Post key={post.id} post={post}/>);

    if (blog === undefined) {
      return;
    }

    if (!blog.share_likes) {
      return (
        <ScrollView>
          {postsEle}
        </ScrollView>
      )
    } else {
      return (
        <View>
          <View style={styles.pager}>
            <TouchableHighlight style={[styles.pager_buttons, this.state.activeIndex === 0 ? styles.pager_buttons_active : {}]} onPress={() => this.postsPage()}>
              <Text style={[styles.pager_buttons_text, this.state.activeIndex === 0 ? styles.pager_buttons_text_active : {}]}>Blogs</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.pager_buttons, this.state.activeIndex === 1 ? styles.pager_buttons_active : {}]} onPress={() => this.likesPage()}>
              <Text style={[styles.pager_buttons_text, this.state.activeIndex === 1 ? styles.pager_buttons_text_active : {}]}>Likes</Text>
            </TouchableHighlight>
          </View>

          <Swiper ref="swiper"
                  loop={false}
                  style={styles.wrapper}
                  showsButtons={false}
                  showsPagination={false}
                  onMomentumScrollEnd={(e, state, context) => this.setState({ activeIndex: state.index }) }>
            <ScrollView
              style={styles.slide1}>
              {postsEle}
            </ScrollView>
            <ScrollView
              onScroll={(event) => {
                console.log(this);
                console.log(event.nativeEvent.contentOffset.y);
                const currentOffset = event.nativeEvent.contentOffset.y;
                const direction = currentOffset > this.offset ? 'down' : 'up';
                this.offset = currentOffset;
                console.log(direction);
              }}
              bounces={false}
              scrollEventThrottle={200}
              style={styles.slide2}>
              {likeEle}
            </ScrollView>
          </Swiper>
        </View>
      )
    }
  }

  render() {
    const { loading } = this.state;
    const content = this.renderContent();

    return (
      <NavigatorView
        renderHeader={() => this.renderHeader()}>
        {content}
      </NavigatorView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_avatar: {
    width: 32,
    height: 32,
  },
  header_user_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_title: {
    color: '#ffffff',
    fontWeight: '600',
    marginLeft: 14,
    fontSize: 16,
  },
  pager: {
    flexDirection: 'row',
  },
  pager_buttons: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  pager_buttons_active: {
    borderBottomWidth: 2,
    borderBottomColor: '#506385',
  },
  pager_buttons_text: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 10,
  },
  pager_buttons_text_active: {
    color: '#506385',
  },
});

export default connect(
  (state) => ({}),
  (dispatch) => ({}),
)(BlogDetail);
