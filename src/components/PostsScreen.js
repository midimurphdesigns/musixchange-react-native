import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';

import { fetchPosts } from '../actions/postActions';
import PostItem from './PostItem';

export class PostsScreen extends React.Component {

  static navigationOptions = {
    title: 'PostsScreen',
    drawerIcon: (
      <Icon
        name='musical-notes'
        color='#00aced' />
    ),
  };

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props.postsState;
    return (
      <Container>

        {/* <Header>
          <Left>
            <Icon name="ios-menu" onPress={() => {
              this.props.navigation.openDrawer()
            }} />
          </Left>
        </Header> */}

        {posts.map(element => (
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
  // console.log('da state', state)
  return {
    postsState: state.postReducer,
  }
};

export default connect(mapStateToProps)(PostsScreen);