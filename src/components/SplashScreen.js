import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Container, Header, Content, Left, Icon } from "native-base";
import { loadAuthToken } from "../local-storage";

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "SplashScreen"
    // drawerIcon: <Icon name="home" color="#00aced" />
  };

  componentDidMount() {
    this.setupAuth();
  }

  setupAuth = () => {
    loadAuthToken().then(res => {
      if (res) {
        this.props.navigation.navigate("Main");
      }
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <View style={styles.boxContainerText}>
          <Text style={styles.text}>Musixchange</Text>
          <Text style={styles.text}>Buy & sell music gear</Text>
        </View>

        <View style={styles.boxContainer}>
          <Button
            onPress={() => navigate("LoginScreen")}
            backgroundColor="blue"
            large
            raised
            iconRight={{
              name: "sign-in",
              type: "font-awesome",
              buttonStyle: styles.boxContainer
            }}
            title="Login"
          />
        </View>

        <View style={styles.boxContainer}>
          <Button
            onPress={() => navigate("SignupScreen")}
            backgroundColor="blue"
            large
            raised
            iconRight={{
              name: "user-plus",
              type: "font-awesome",
              buttonStyle: styles.boxContainer
            }}
            title="Signup"
          />
        </View>

        <View style={styles.boxContainer}>
          <Button
            onPress={() => navigate("PostsScreen")}
            backgroundColor="blue"
            large
            raised
            iconRight={{
              name: "angle-right",
              type: "font-awesome",
              buttonStyle: styles.boxContainer
            }}
            title="Go to App"
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    // alignItems: "center",
    justifyContent: "center"
  },
  boxContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  boxContainerText: {
    // padding: 20,
    alignItems: "center",
    flex: 4,
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "700"
    // margin: 20,
  }
});
