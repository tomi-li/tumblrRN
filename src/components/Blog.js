/**
 * All Codes below are Lifetime Warranted by Tomi since 10/01/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View, Image, Text } from 'react-native';

export const Blog = (props) => {

  const { blog, style } = props;

  return (
    <TouchableHighlight
      style={style}
      underlayColor='rgba(0,0,0,.3)'
      onPress={() => go('detail', { blogName: blog.name })}>
      <View style={styles.item}>
        <Image style={styles.item_avatar} source={{ uri: `https://api.tumblr.com/v2/blog/${blog.name}/avatar/` }}/>
        <View>
          <Text style={styles.name}>{blog.name}</Text>
          <Text style={styles.title}>{blog.title} Follower: {blog.followers}</Text>
        </View>
      </View>

    </TouchableHighlight>
  )

};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  style: PropTypes.object,
};


const styles = StyleSheet.create({
  item: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 22,
  },
  item_avatar: {
    width: 38,
    height: 38,
    marginRight: 16,
  },
  name: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 15,
  },
  title: {
    color: '#ffffff',
  },
});