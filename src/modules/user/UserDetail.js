/**
 * All Codes below are Lifetime Warranted by Tomi since 10/01/2017.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TumblrClient} from '../../api';
import {go} from '../../router';
import {Blog} from  '../../components/Blog';

class UserDetail extends Component {

    state = {
        user: undefined,
    };

    componentWillMount() {
        TumblrClient.userInfo((err, data) => {
            console.log(data);
            this.setState({user: data.user});
        })
    }

    renderBlog(blogs) {
        if (blogs === undefined || blogs.length === 0) return;

        return blogs.map(blog => <Blog style={styles.blog} key={blog.name} blog={blog}/>);
    }


    render() {
        const user = this.state.user || {};
        const blogContent = this.renderBlog(user.blogs);

        return (
            <View style={styles.view}>
                <View style={styles.setting}>
                    <Text style={styles.setting_header}>ACCOUNT</Text>
                    <TouchableHighlight onPress={() => go('userLikes')}>
                        <View style={styles.setting_item}>
                            <View style={ styles.setting_item_left}>
                                <Icon style={styles.setting_item_icon} name="heart" size={22} color="#ffffff"/>
                                <Text style={styles.setting_item_title}>Likes</Text>
                            </View>
                            <Text style={styles.setting_item_count}>{user.likes}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => go('userFollowing')}>
                        <View style={styles.setting_item}>
                            <View style={styles.setting_item_left}>
                                <Icon style={styles.setting_item_icon} name="rss" size={22} color="#ffffff"/>
                                <Text style={styles.setting_item_title}>Following</Text>
                            </View>
                            <Text style={styles.setting_item_count}>{user.following}</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.setting}>
                    <Text style={styles.setting_header}>Blogs</Text>
                    {blogContent}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#374A60',
        paddingTop: Platform.OS === 'ios' ? 22 : 0,
        marginTop: Platform.OS === 'ios' ? 0 : 22,
    },
    setting: {
        borderTopColor: '#999999',
        borderTopWidth: 1
    },
    setting_header: {
        color: '#999999',
        fontWeight: 'bold',
        fontSize: 12,
        paddingVertical: 14,
        paddingHorizontal: 16
    },
    setting_item: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        paddingVertical: 14,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    setting_item_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    setting_item_icon: {
        width: 22,
        marginRight: 30
    },
    setting_item_title: {
        color: '#ffffff',
        fontSize: 14
    },
    setting_item_count: {
        color: '#999999',
        fontSize: 14
    },
    blog: {
        backgroundColor: '#548F55'
    }
});

export{UserDetail};












