import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import PostsScreen from "./PostsScreen";

const AuthNavigator = createStackNavigator(
  {
    LoginScreen: {
      getScreen: () => require("./LoginScreen").default
    },
    SignupScreen: {
      getScreen: () => require("./SignupScreen").default
    },
    ForgotPassword: {
      getScreen: () => require("./ForgotPasswordScreen").default
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const MainNavigator = createStackNavigator({
  PostsScreen: { screen: PostsScreen }
});

export const AppNavigator = createSwitchNavigator(
  {
    SplashScreen: {
      getScreen: () => require("./SplashScreen").default
    },
    OnboardingScreen: {
      getScreen: () => require("./OnboardingScreen").default,
      navigationOptions: {
        header: null
      }
    },
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "SplashScreen"
  }
);
