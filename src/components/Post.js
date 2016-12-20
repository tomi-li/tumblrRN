/**
 * All Codes below are Lifetime Warranted by Tomi since 13/12/2016.
 */


import React from 'react';
import {StyleSheet, View, Text, Dimensions, WebView, Image} from 'react-native';
import {IconButton} from './IconButton';
import {TextButton} from './TextButton';
import {Actions} from 'react-native-router-flux';
import Video from 'react-native-video';
import _ from 'lodash';

export const Post = (props) => {

    const {post, toggleLike} =  props;
    const {width, scale} = Dimensions.get('window');
    const postBody = getPostBody(post, width);

    return (
        <View style={styles.post}>
            <View style={styles.post_head}>
                <TextButton
                    textStyles={styles.post_head_title}
                    onPress={() => Actions.detail({postName: post.blog_name})}>{post.blog_name}</TextButton>
                <IconButton onPress={()=>{}} size={18} name="share-alt"/>
            </View>

            <View style={styles.post_body}>
                {postBody}
            </View>

            <View style={styles.post_foot}>
                <TextButton onPress={() => {}} textStyles={styles.post_foot_notes}>{post.note_count + 'notes'}</TextButton>
                <View style={styles.post_foot_buttons}>
                    <IconButton style={styles.post_foot_buttons_button} onPress={()=>{}} size={18} color='#B5B5B5' name="share"/>
                    <IconButton style={styles.post_foot_buttons_button} onPress={() => toggleLike(post)} size={18} color={post.liked ? 'red' : '#B5B5B5'} name="heart"/>
                </View>
            </View>
        </View>
    )
};

Post.PropTypes = {
    // Required
    'post': React.PropTypes.any.isRequired,
    'toggleLike': React.PropTypes.func.isRequired
};


const styles = StyleSheet.create({
    'post': {
        marginTop: 20
    },
    'post_body': {
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
    },
    'post_head': {
        marginHorizontal: 8,
        paddingHorizontal: 15,
        height: 46,
        backgroundColor: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: '#647081',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    'post_head_title': {
        fontWeight: 'bold'
    },
    'post_foot': {
        marginHorizontal: 10,
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: '#F7F7F7',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#647081',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    'post_foot_notes': {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#B5B5B5'
    },
    'post_foot_buttons': {
        flexDirection: 'row',
        alignItems: 'center'
    },
    'post_foot_buttons_button': {
        marginLeft: 16
    }
});


function getPostBody(post: Object, width: Number) {
    let postBody;

    switch(post.type) {
        case 'photo':
            let fittedImage = _.map(post.photos, photo => {
                return _.reduce(photo.alt_sizes, (prev, curr) => {
                    return (Math.abs(curr.width - width) < Math.abs(prev.width - width) ? curr : prev);
                })
            });

            postBody = _.map(fittedImage, image => {
                let ratio = image.width / image.height;
                let imageWidth = width - 10;
                let imageHeight = (width - 10) / ratio;
                let imageStyle = {width: imageWidth, height: imageHeight, marginTop: _.first(fittedImage) === image ? 0 : 5};

                return <Image
                    key={image.url}
                    resizeMode='contain'
                    style={imageStyle}
                    source={{ uri : image.url }}/>
            });

            break;
        case 'video':
            postBody = <Video
                style={{ width: null, height: 200 }}
                source={{uri: post.video_url}}/>;
            break;
        case 'text':
        case 'answer':
            postBody = <WebView source={{html : 'post.body'}}/>;
            break;
        case 'link':
            postBody = <Text>{post.url}</Text>;
            break;

        default :
            console.warn(`unhandled type ${post.type}`)
    }
    return postBody;
}