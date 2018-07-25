import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Icon, Container, Header, Content, Left } from "native-base";

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { AuthServices } from '../services/api';

export class LogoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  static navigationOptions = {
    title: "Logout",
    tabBarIcon: <Icon name="musical-notes" color="#00aced" />
  };

  logout() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    AuthServices.logout();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text>Hello World!</Text>
        <Text>Logout Screen</Text>
        <Button
          type="button"
          onPress={this.logout}
          style={styles.button}
          title="Logout"
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    // flex: 1,
  },
  button: {
    backgroundColor: "blue",
    width: "50%",
    marginTop: 20
  }
});

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LogoutScreen);
