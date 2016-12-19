/**
 * All Codes below are Lifetime Warranted by Tomi since 13/12/2016.
 */


import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Dimensions, Button, WebView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {TumblrClient} from '../api';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import _ from 'lodash';

export default class Post extends Component {

    componentWillMount() {
        // console.log(thixs.props.post);
    }

    test() {
        // console.log('test')
    }

    toggleLike() {
        this.props.post.liked ?
            TumblrClient.unlikePost({
                id: this.props.post.id,
                reblog_key: this.props.post.reblog_key
            }, (err, data) => {
                console.log(err);
                console.log(data);
            })
            :
            TumblrClient.likePost({
                id: this.props.post.id,
                reblog_key: this.props.post.reblog_key
            }, (err, data) => {
                console.log(err);
                console.log(data);
            })
    }

    render() {
        let {width, scale} = Dimensions.get('window');

        let postBody;

        console.log(this.props.post);

        switch(this.props.post.type) {
            case 'photo':
                let fittedImage = _.map(this.props.post.photos, photo => {
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
                    source={{uri: this.props.post.video_url}}/>;
                break;
            case 'text':
                postBody = <WebView source={{html : 'this.props.post.body'}}/>;
                break;
            case 'link':
                postBody = <Text>{this.props.post.url}</Text>;
                break;
            default :
                console.warn(`unhandled type ${this.props.post.type}`)
        }

        return (
            <View style={styles.post}>
                <View style={styles.post_head}>
                    <TouchableHighlight onPress={() => Actions.detail({ postName: this.props.post.blog_name})}>
                        <Text style={styles.post_head_title}>{this.props.post.blog_name}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.test}><Icon size={18} name="share-alt"></Icon></TouchableHighlight>
                </View>

                <View style={styles.post_body}>
                    {postBody}
                </View>

                <View style={styles.post_foot}>
                    <Text style={styles.post_foot_notes}>{this.props.post.note_count} notes</Text>
                    <View style={styles.post_foot_buttons}>
                        <TouchableHighlight style={styles.post_foot_buttons_button}><Icon size={18} color='#B5B5B5' name="share"></Icon></TouchableHighlight>
                        <TouchableHighlight onPress={this.toggleLike.bind(this)} style={styles.post_foot_buttons_button}><Icon size={18} color={this.props.post.liked ? 'red':'#B5B5B5'} name="heart"></Icon></TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

Post.PropTypes = {
    // Required
    'post': React.PropTypes.any.isRequired,

};

let styles = StyleSheet.create({
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