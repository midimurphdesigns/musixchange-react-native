import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Icon, Container, Header, Content, Left } from "native-base";

export class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: "ForgotPasswordScreen",
    drawerIcon: <Icon name="person" color="#00aced" />
  };

  render() {

    return (
      <View style={styles.container}>
        <Text>Forgot Password Screen</Text>
      </View>
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
    marginTop: 20,
    width: "100%"
  }
});

export default connect()(ForgotPasswordScreen);
