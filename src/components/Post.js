/**
 * All Codes below are Lifetime Warranted by Tomi since 13/12/2016.
 */
import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image } from 'react-native';
import ProgressiveImage  from 'react-native-image-progress';
import { CircleSnail } from 'react-native-progress';
import { IconButton } from './IconButton';
import { TextButton } from './TextButton';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import { Link } from 'react-router-native';

export const Post = (props) => {

  const { post, toggleLike } = props;
  const { width, scale } = Dimensions.get('window');
  const postBody = renderBody(post, width);
  const postTags = renderTags(post.tags);
  const postHeaderTrail = renderPostHeaderTrail(post.trail);

  return (
    <View style={styles.post}>
      <View style={styles.post_head}>
        <Image style={styles.post_head_avatar} source={{ uri: `https://api.tumblr.com/v2/blog/${post.blog_name}/avatar/` }}/>
        <View style={styles.post_head_titles}>
          {postHeaderTrail}
        </View>
      </View>

      <View style={styles.post_body}>
        {postBody}
      </View>

      <ScrollView horizontal={true}>
        <TextButton color="#B5B5B5" onPress={() => this.props.history.push('/detail', { state: { blogName: post.source_title } })}>Source: {post.source_title}</TextButton>
        {postTags}
      </ScrollView>

      <View style={styles.post_foot}>
        <TextButton onPress={() => {
        }} textStyles={styles.post_foot_notes} color="#B5B5B5">{post.note_count + ' notes'}</TextButton>
        <View style={styles.post_foot_buttons}>
          <View style={styles.post_foot_buttons_button}>
            <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => {
            }} size={18} color='#B5B5B5' name="paper-plane-o"/>
          </View>
          <View style={styles.post_foot_buttons_button}>
            <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => {
            }} size={18} color='#B5B5B5' name="comment-o"/>
          </View>
          <View style={styles.post_foot_buttons_button}>
            <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => {
            }} size={18} color='#B5B5B5' name="retweet"/>
          </View>
          <View style={styles.post_foot_buttons_button}>
            <IconButton iconStyle={styles.post_foot_buttons_button} onPress={() => toggleLike(post)} size={18} color={post.liked ? 'red' : '#B5B5B5'} name={post.liked ? 'heart' : 'heart-o'}/>
          </View>
        </View>
      </View>
    </View>
  )
};

Post.PropTypes = {
  // Required
  'post': React.PropTypes.any.isRequired,
  'toggleLike': React.PropTypes.func,
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
  'post_body_trail_avatar': {
    width: 24,
    height: 24,
    borderRadius: 2,
  },
  'post_head': {
    paddingHorizontal: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'post_head_avatar': {
    width: 36,
    height: 36,
    borderRadius: 2,
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
  let postBody;
  const postTrail = renderTrail(post.trail);

  switch (post.type) {

    case 'photo':
      const fittedImage = _.map(post.photos, photo => {
        return _.reduce(photo.alt_sizes, (prev, curr) => {
          return (Math.abs(curr.width - width) < Math.abs(prev.width - width) ? curr : prev);
        })
      });

      const fittedImageElement = _.map(fittedImage, image => {
        const ratio = image.width / image.height;
        const imageWidth = width;
        const imageHeight = width / ratio;
        const imageStyle = { width: imageWidth, height: imageHeight, marginTop: _.first(fittedImage) === image ? 0 : 5, backgroundColor: '#cccccc' };

        return <ProgressiveImage
          key={image.url}
          indicator={CircleSnail}
          resizeMode='contain'
          style={imageStyle}
          source={{ uri: image.url }}/>
      });

      const linkElement = post.link_url && <Text style={styles.post_body_link_url}>{post.link_url}</Text>;

      postBody =
        <View>
          {fittedImageElement}
          {linkElement}
          {postTrail}
          <Text style={styles.post_body_text}>{post.summary}</Text>
        </View>;
      break;
    case 'video':
      if (!_.isEmpty(post.video_url)) {
        return <Video
          styles={{ width: 100, height: 100 }}
          paused={true}
          source={{ uri: post.video_url }}/>;
      }
    case 'text':
    case 'answer':
      return <Text>{post.summary}</Text>;
    case 'link':
      return <Text>{post.url}</Text>;
    default :
      console.warn(`unhandled type ${post.type}`);
      return '';
  }

  return postBody;
}

function renderTags(tags: Array) {
  return _.map(tags, tag => <TextButton color="#B5B5B5" key={tag} onPress={() => this.props.history.push('tagDetail', { tag: tag })}>#{tag}</TextButton>)
}

function renderTrail(trail: Array) {
  return _.last(_.map(trail, (trailItem, index) =>
    <View style={styles.post_body_trail} key={index}>
      <Image style={styles.post_body_trail_avatar} source={{ uri: `https://api.tumblr.com/v2/blog/${trailItem.blog.name}/avatar/` }}/>
      <TextButton textStyles={styles.post_body_trail_text} onPress={ () => this.props.history.push('detail', { blogName: trailItem.blog.name })}>{trailItem.blog.name}</TextButton>
    </View>,
  ))
}

function renderPostHeaderTrail(trail: Array) {
  if (trail && trail.length > 0) {
    return <TextButton
      textStyles={styles.post_head_subtitle}
      onPress={ () => go('detail', { blogName: trail[0].blog.name })}>
      <Icon name="retweet"/> {trail[0].blog.name}
    </TextButton>
  } else {
    return null
  }

}