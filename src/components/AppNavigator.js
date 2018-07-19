import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import PostsScreen from "./PostsScreen";
import OnboardingScreen from "./OnboardingScreen";
import { LoginScreen } from "./LoginScreen";
import { SignupScreen } from "./SignupScreen";

const AuthNavigator = createStackNavigator(
  {
    OnboardingScreen: {
      getScreen: () => require("./OnboardingScreen").default
    },
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

const MainNavigator = createStackNavigator(
  {
    OnboardingScreen: { screen: OnboardingScreen },
    LoginScreen: { screen: LoginScreen },
    SignupScreen: { screen: SignupScreen },
    PostsScreen: { screen: PostsScreen }
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  }
);

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
