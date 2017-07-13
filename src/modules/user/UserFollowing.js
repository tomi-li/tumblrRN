/**
 * All Codes below are Lifetime Warranted by Tomi since 10/01/2017.
 */

import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { TumblrClient } from '../../api';
import { NavigatorView } from '../../components/NavigatorView';
import { Blog } from '../../components/Blog';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class UserFollowing extends Component {

  state = {
    total_blogs: 0,
    dataSource: ds.cloneWithRows([]),
  };

  componentWillMount() {
    TumblrClient.userFollowing((err, data) => {
      this.setState({
        total_blogs: data.total_blogs,
        dataSource: ds.cloneWithRows(data.blogs),
      })
    })
  }

  renderHeader(total_blogs) {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>Following </Text>
        <Text style={styles.header_count}>{total_blogs}</Text>
      </View>
    )
  }

  render() {
    const { total_blogs, dataSource } = this.state;

    return (
      <NavigatorView
        renderHeader={() => this.renderHeader(total_blogs)}>
        <ListView
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={(data) => <Blog blog={data}/>}/>
      </NavigatorView>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  header_text: {
    color: '#ffffff',
    marginLeft: 10,
  },
  header_count: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 6,
  },
});

export { UserFollowing };