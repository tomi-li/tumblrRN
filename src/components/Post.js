/**
 * All Codes below are Lifetime Warranted by Tomi since 13/12/2016.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableHighlight, PixelRatio } from 'react-native';
import ProgressiveImage  from 'react-native-image-progress';
import { CircleSnail } from 'react-native-progress';
import { IconButton } from './IconButton';
import { TextButton } from './TextButton';
import { Avatar } from './Avatar';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import { Link } from 'react-router-native';


export const Post = (props) => {

  const { post, toggleLike } = props;
  const { width } = Dimensions.get('window');
  const postBody = renderBody(post, width);
  const postTags = renderTags(post.tags);
  const postHeaderTrail = renderPostHeaderTrail(post.trail);
  const sourceButton = ('source_title' in post)
    ? <TextButton color="#B5B5B5" onPress={() => this.props.history.push('/detail', { state: { blogName: post.source_title } })}>Source: {post.source_title}</TextButton>
    : undefined;

  console.log(props);

  return (
    <View style={styles.post}>
      <View style={styles.post_head}>
        <TouchableHighlight onPress={() => props.history.push('/detail')}>
          <View><Avatar name={post.blog_name} type="rounded"/></View>
        </TouchableHighlight>

        <View style={styles.post_head_titles}>
          <Text>{post.blog_name}</Text>
          {postHeaderTrail}
        </View>
      </View>

      <View style={styles.post_body}>
        {postBody}
      </View>

      <ScrollView horizontal={true}>
        {sourceButton}
        {postTags}
      </ScrollView>

      <View style={styles.post_foot}>
        <TextButton onPress={() => ({})} textStyles={styles.post_foot_notes} color="#B5B5B5">{post.note_count + ' notes'}</TextButton>
        <View style={styles.post_foot_buttons}>
          <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => ({})} size={18} color='#B5B5B5' name="paper-plane-o"/>
          <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => ({})} size={18} color='#B5B5B5' name="comment-o"/>
          <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => ({})} size={18} color='#B5B5B5' name="retweet"/>
          <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => toggleLike(post)} size={18} color={post.liked ? 'red' : '#B5B5B5'} name={post.liked ? 'heart' : 'heart-o'}/>
        </View>
      </View>
    </View>
  )
};

Post.PropTypes = {
  // Required
  'post': PropTypes.any.isRequired,
  'toggleLike': PropTypes.func,
};


const styles = StyleSheet.create({
  'post': {
    marginBottom: 22,
    backgroundColor: '#ffffff',
  },
  'post_body_link_url': {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#eeeeee',
    color: '#999999',
    fontSize: 12,
  },
  'post_body_text': {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  'post_body_source_and_tag': {
    flexDirection: 'row',
  },
  'post_body_trail': {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'post_body_trail_text': {
    fontWeight: 'bold',
  },
  'post_head': {
    paddingHorizontal: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },

  'post_head_titles': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  'post_head_title': {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 0,
  },
  'post_head_subtitle': {
    color: '#cccccc',
  },
  'post_foot': {
    paddingHorizontal: 12,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  'post_foot_notes': {
    fontWeight: 'bold',
    fontSize: 14,
  },
  'post_foot_buttons': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'post_foot_buttons_button': {
    marginLeft: 8,
  },
});

// TODO all html content need to be render in HTMl. right now . just render in text wrapped in text
function renderBody(post: Object, width: Number) {
  const postTrail = renderTrail(post.trail);

  switch (post.type) {

    case 'photo':
      const fittedImages = _.map(post.photos, photo => {
        return _.reduce(photo.alt_sizes, (prev, curr) => {
          return (Math.abs(curr.width - width * PixelRatio.get()) < Math.abs(prev.width - width * PixelRatio.get()) ? curr : prev);
        })
      });

      const fittedImageElement = _.map(fittedImages, image => {
        const ratio = image.width / image.height;
        const imageWidth = width;
        const imageHeight = width / ratio;
        const imageStyle = { width: imageWidth, height: imageHeight, marginTop: _.first(fittedImages) === image ? 0 : 5, backgroundColor: '#cccccc' };

        return <ProgressiveImage
          key={image.url}
          indicator={CircleSnail}
          resizeMode='contain'
          style={imageStyle}
          source={{ uri: image.url }}/>
      });

      const linkElement = post.link_url && <Text style={styles.post_body_link_url}>{post.link_url}</Text>;

      return (
        <View>
          {fittedImageElement}
          {linkElement}
          {postTrail}
          <Text style={styles.post_body_text}>{post.summary}</Text>
        </View>
      );
    case 'video':
      if (!_.isEmpty(post.video_url)) {
        return <Video
          styles={{ width: 100, height: 100 }}
          paused={true}
          source={{ uri: post.video_url }}/>;
      }
    case 'text':
      return <Text>{post.blog_name}</Text>
    case 'answer':
      return <Text>{post.summary}</Text>;
    case 'link':
      return <Text>{post.url}</Text>;
    default :
      console.warn(`unhandled type ${post.type}`);
      return '';
  }
}

function renderTags(tags: Array) {
  return _.map(tags, tag => <TextButton color="#B5B5B5" key={tag} onPress={() => this.props.history.push('tagDetail', { tag: tag })}>#{tag}</TextButton>)
}

function renderTrail(trail: Array) {
  return _.last(_.map(trail, (trailItem, index) =>
    <View style={styles.post_body_trail} key={index}>
      <Avatar name={trailItem.blog.name} type="rounded" size="sm"/>
      <TextButton textStyles={styles.post_body_trail_text} onPress={ () => this.props.history.push('detail', { blogName: trailItem.blog.name })}>{trailItem.blog.name}</TextButton>
    </View>,
  ))
}

function renderPostHeaderTrail(trail: Array) {
  return (trail && trail.length > 0)
    ? (
      <TextButton
        textStyles={styles.post_head_subtitle}
        onPress={ () => go('detail', { blogName: trail[0].blog.name })}>
        <Icon name="retweet"/> {trail[0].blog.name}
      </TextButton>
    )
    : null;
}