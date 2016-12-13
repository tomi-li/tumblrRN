/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Dimensions,
    StatusBar
} from 'react-native';
import _ from 'lodash';
import {TumblrClient} from '../api';
import PostView from './Post';


export default class TimelineList extends Component {

    state = {
        posts: [],
        animating: false,
        statusBarShowing: true,
        offset: 0
    };

    componentWillMount() {
        this.setState({animating: true});
        TumblrClient.userDashboard((err, data) => {
            this.setState({
                posts: data.posts,
                animating: false
            })
        });
    }

    onScroll(event) {
        console.log(this);
        if (this.state === undefined) return;
        let currentOffset = event.nativeEvent.contentOffset.y;
        let direction = currentOffset > this.state.offset ? 'down' : 'up';
        this.state.offset = currentOffset;
        console.log(currentOffset);
        console.log(this.state.offset);
        console.log(direction);
    }


    render() {
        let items = _.map(this.state.posts, post => <PostView post={post} key={post.id}></PostView>);

        return (
            <ScrollView style={styles.TimeLine}
                        onScroll={this.onScroll.bind(1)}
                        scrollEventThrottle={300}>
                <StatusBar
                    barStyle="light-content"
                    translucent={true}
                    animated={true}
                />
                <ActivityIndicator
                    style={styles.Loader}
                    animating={this.state.animating}
                    size="large"/>
                {items}
            </ScrollView>
        )
    }

}

let styles = StyleSheet.create({
    TimeLine: {
        backgroundColor: '#374A60'
    },
    Loader: {
        position: 'absolute',
        top: Dimensions.get('window').height / 2 - 40,
        left: Dimensions.get('window').width / 2 - 20
    }
});
