/**
 * All Codes below are Lifetime Warranted by Tomi since 10/01/2017.
 */

import React, {Component} from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import {TumblrClient} from '../../api';
import {NavigatorView} from '../../components/NavigatorView';
import {Post} from '../../components/Post';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class UserLikes extends Component {

    state = {
        liked_count: 0,
        dataSource: ds.cloneWithRows([])
    };

    componentWillMount() {
        TumblrClient.userLikes((err, data) => {
            console.log(data);
            this.setState({
                dataSource: ds.cloneWithRows(data.liked_posts),
                liked_count: data.liked_count
            })
        })
    }

    renderHeader(total_blogs) {
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>Likes </Text>
                <Text style={styles.header_count}>{total_blogs}</Text>
            </View>
        )
    }


    render() {
        const {liked_count, dataSource} = this.state;

        return (
            <NavigatorView
                renderHeader={() => this.renderHeader(liked_count)}>
                <ListView
                    dataSource={dataSource}
                    enableEmptySections={true}
                    renderRow={(data) => <Post post={data} />}/>
            </NavigatorView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    header_text: {
        color: '#ffffff',
        marginLeft: 10
    },
    header_count: {
        fontSize: 12,
        color: '#666666',
        marginLeft: 6
    },
});

export {UserLikes};