import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { Icon, Container } from "native-base";

import {
  fetchPosts,
  postsRefreshSuccess,
  postsLoadMoreSuccess
} from "../actions/postActions";
import PostItem from "./PostItem";

export class PostsScreen extends React.Component {
  static navigationOptions = {
    title: "For Sale",
    tabBarIcon: <Icon name="musical-notes" color="#00aced" />
  };

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleRefresh = () => {
    this.props.dispatch(postsRefreshSuccess());
    this.props.dispatch(fetchPosts());
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.props.dispatch(fetchPosts());
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Search gear" lightTheme round />;
  };

  renderFooter = () => {
    if (!this.props.postsState.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    const { posts } = this.props.postsState;
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={`$${item.price}`}
              avatar={{ uri: item.image }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.props.postsState.refreshing}
        />
      </List>
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

export default connect(mapStateToProps)(PostsScreen);
