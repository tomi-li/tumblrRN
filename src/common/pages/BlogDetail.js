/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, {Component} from 'react';
import {Button, ScrollView, Text, StyleSheet, Platform, Image, View, TouchableHighlight} from 'react-native';
import {back} from '../../router';
import {connect} from "react-redux";
import {TumblrClient} from '../../api';
import Swiper from 'react-native-swiper';
import {IconButton} from '../../components/IconButton';
import {TextButton} from '../../components/TextButton';
import * as _ from 'lodash';

class BlogDetail extends Component {

    static PropTypes = {
        blogName: React.PropTypes.string.isRequired
    };

    state = {
        loading: false,
        blog: {},
        activeIndex: 0
    };

    componentWillMount() {
        // const blogName = this.props.blogName;
        const blogName = "tomi-lee.tumblr.com";

        this.setState({loading: true});
        TumblrClient.blogPosts(blogName, (err, data) => {
            console.log(data);
            this.setState({
                loading: false,
                blog: data
            });
        })
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
                        followed: false
                    }
                }
            });
            TumblrClient.unfollowBlog({url: this.state.blog.blog.url}, () => {
            })
        } else {
            this.setState({
                blog: {
                    ...this.state.blog,
                    blog: {
                        ...this.state.blog.blog,
                        followed: true
                    }
                }
            });
            TumblrClient.followBlog({url: this.state.blog.blog.url}, () => {
            })
        }
    }

    render() {
        console.log(this.state);

        const {loading} = this.state;
        let {blog, posts, total_posts} = this.state.blog;
        if (blog === undefined) blog = {};

        console.log(blog);
        // debugger
        let postsEle = undefined;
        if (!_.isEmpty(posts)) {
            postsEle = _.map(_.cloneDeep(posts), post => {
                console.log(post);
                return <Text key={post.id}>{post.blog_name}</Text>
                // return <Post post={post} toggleLike={() => {}}/>
            });
        }


        return (
            <ScrollView style={styles.page} ref="test">
                <View style={styles.navigator}>
                    <IconButton name="chevron-left" onPress={() => {back()}}/>
                    <Image style={{width: 48, height: 48}} source={{uri : `https://api.tumblr.com/v2/blog/${blog.name}/avatar/${48}`}}/>
                    <Text style={{ fontSize: 20, color: '#ffffff'}}>{blog.name}</Text>
                    <TextButton onPress={() => this.toggleFollow()}>{blog.followed ? 'unfollow' : 'follow'}</TextButton>
                </View>

                <View style={styles.pager}>
                    <TouchableHighlight style={[styles.pager_buttons, this.state.activeIndex === 0 ? styles.pager_buttons_active : {}]} onPress={() => this.postsPage()}>
                        <Text>Blogs</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.pager_buttons, this.state.activeIndex === 1 ? styles.pager_buttons_active : {}]} onPress={() => this.likesPage()}>
                        <Text>Likes</Text>
                    </TouchableHighlight>
                </View>

                <Swiper ref="swiper"
                        style={styles.wrapper}
                        showsButtons={false}
                        showsPagination={false}
                        onMomentumScrollEnd={(e,state,context) => {
                            console.log(state);
                            this.setState({
                                activeIndex : state.index
                            })
                        }}>

                    <ScrollView
                        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                        style={styles.slide1}>
                        {postsEle}
                    </ScrollView>
                    <ScrollView
                        onScroll={(event : Object) => {
                            console.log(this);
                            console.log(event.nativeEvent.contentOffset.y);
                            const currentOffset = event.nativeEvent.contentOffset.y;
                            const direction = currentOffset > this.offset ? 'down' : 'up';
                            this.offset = currentOffset;
                            console.log(direction);
                        }}
                        bounces={false}
                        scrollEventThrottle={200}
                        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                        style={styles.slide2}>
                    </ScrollView>
                </Swiper>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        paddingTop: Platform.OS === 'ios' ? 22 : 0,
        marginTop: Platform.OS === 'ios' ? 0 : 22,
    },
    navigator: {
        backgroundColor: '#9911f3',
        flexDirection: 'row'
    },
    header: {},
    wrapper: {},
    slide1: {
        flex: 1,
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pager: {
        flexDirection: 'row'
    },
    pager_buttons: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff00ff'
    },
    pager_buttons_active: {
        borderBottomWidth: 10,
        borderBottomColor: '#ffffff'
    }
});

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(BlogDetail);


