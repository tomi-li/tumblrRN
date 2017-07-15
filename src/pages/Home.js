/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator, ListView, Platform } from 'react-native';
import { Post } from '../components/Post';
import { connect } from 'react-redux'
import * as actions from '../redux/actions';

class Home extends React.Component {

  static propsType = {
    loading: PropTypes.bool.isRequired,
    loadPost: PropTypes.func.isRequired,
  };

  render() {
    const { loadPosts, loading, dataSource, toggleLike } = this.props;

    return (
      <ListView
        style={styles.view}
        dataSource={dataSource}
        renderRow={(rowData) => <Post post={rowData} toggleLike={toggleLike}/>}
        renderFooter={() => <ActivityIndicator animating={loading}/>}
        enableEmptySections={true}
        onEndReached={loadPosts}
        onLayout={() => {
          if (dataSource.getRowCount() === 0) loadPosts()
        }}/>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#374A60',
    paddingTop: Platform.OS === 'ios' ? 22 : 0,
    marginTop: Platform.OS === 'ios' ? 0 : 22,
  },
});

export default connect(
  (state) => ({
    loading: state.loading,
    posts: state.posts,
    dataSource: state.dataSource,
    ds: state.ds,
    page: state.page,
    size: state.size,
  }),
  (dispatch) => ({
    loadPosts: () => {
      return dispatch(actions.loadPosts());
    },
    toggleLike: (post) => dispatch(actions.toggleLikePost(post)),
  }),
)(Home);