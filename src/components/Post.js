/**
 * All Codes below are Lifetime Warranted by Tomi since 13/12/2016.
 */


import React, {Component} from 'react';
import {StyleSheet, Image, View, TouchableHighlight, Text, Dimensions, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {TumblrClient} from '../api';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Post extends Component {

    componentWillMount() {
        console.log(this.props.post);
        let {height, width} = Dimensions.get('window');
        // console.log(height);
        // console.log(width);
    }

    test() {
        console.log('test')
    }

    render() {
        return (
            <View style={styles.post}>
                <View style={styles.post_head}>
                    <TouchableHighlight onPress={() => Actions.detail({ postName: this.props.post.blog_name})}>
                        <Text>{this.props.post.blog_name}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.test}><Icon name="share-alt"></Icon></TouchableHighlight>
                </View>

                <View style={styles.post_body}>
                    <Image
                        resizeMode="cover"
                        blurRadius={2}
                        style={{width: null, height: 200}}
                        source={{ uri : 'https://images.unsplash.com/photo-1431440869543-efaf3388c585?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop='}}/>
                </View>

                <View style={styles.post_foot}>
                    <Text>{this.props.post.note_count} notes</Text>

                    <TouchableHighlight><Icon name="heart"></Icon></TouchableHighlight>
                    <TouchableHighlight><Icon name="share"></Icon></TouchableHighlight>
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
        marginHorizontal: 5,
    },
    'post_head': {
        marginHorizontal: 8,
        height: 40,
        backgroundColor: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: '#647081',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    'post_foot': {
        marginHorizontal: 10,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#647081',
        flexDirection: 'row',
        alignItems: 'center',
    }
});