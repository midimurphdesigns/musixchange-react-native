import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import { fetchPosts } from '../actions/postActions';
import PostItem from './PostItem';

export class PostsScreen extends React.Component {

  static navigationOptions = {
    title: 'PostsScreen',
  };

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Icon name="ios-menu" onPress={() => {
              this.props.navigation.openDrawer()
            }} />
          </Left>
        </Header>

        {this.props.posts.map(element => (
          <PostItem {...element} key={String(element.id)} />
        ))}

      </Container>
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
    posts: state.posts,
  }
};

export default connect(mapStateToProps)(PostsScreen);