import React from "react";
import { connect } from "react-redux";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { StyleSheet, Image } from "react-native";
import { Container, Content, Header, Body, Icon, Button } from "native-base";

import OnboardingScreen from "./src/components/OnboardingScreen";
import { LoginScreen } from "./src/components/LoginScreen";
import { SignupScreen } from "./src/components/SignupScreen";
import PostsScreen from "./src/components/PostsScreen";
import { clearAuth } from "./src/actions/auth";
import { clearAuthToken } from "./src/local-storage";
import { AuthServices } from "./src/services/api";

class Navigation extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    AuthServices.logout();
  }

  render() {

    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <Button onPress={() => this.logOut()}>Log out</Button>;
    }

    CustomDrawerContentComponent = props => (
      <Container>
        <Header style={{ height: 200, backgroundColor: "white" }}>
          <Body>
            <Image
              style={styles.drawerImage}
              source={require("./src/images/m-logo.png")}
            />
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props} />
          {logOutButton}
        </Content>
      </Container>
    );

    DrawerNavigation = createDrawerNavigator(
      {
        OnboardingScreen: { screen: OnboardingScreen },
        LoginScreen: { screen: LoginScreen },
        SignupScreen: { screen: SignupScreen },
        PostsScreen: { screen: PostsScreen }
      },
      {
        initialRouteName: "OnboardingScreen",
        contentComponent: CustomDrawerContentComponent,
        DrawerOpenRoute: "DrawerOpen",
        DrawerCloseRoute: "DrawerClose",
        DrawerToggleRoute: "DrawerToggle"
      }
    );
    return <DrawerNavigation />;
  }
}

styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navigation);
