import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

import { fetchPosts } from "../actions/postActions";
import PostItem from "./PostItem";

export class LogoutScreen extends React.Component {
  static navigationOptions = {
    title: "Logout",
    tabBarIcon: <Icon name="musical-notes" color="#00aced" />
  };

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props.postsState;
    return (
      <Container>
        <Text>Hello World!</Text>
        <Text>Logout Screen</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    postsState: state.postReducer
  };
};

export default connect(mapStateToProps)(LogoutScreen);
