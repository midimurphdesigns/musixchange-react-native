import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';

export class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  static navigationOptions = {
    title: 'Posts',
  };

  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  return {
    postsState: state.posts,
  }
};

export default connect(mapStateToProps)(Posts);