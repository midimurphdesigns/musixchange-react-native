import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostScreen";
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

const TabNavigator = createBottomTabNavigator({
  PostsScreen: { screen: PostsScreen },
  CreatePostScreen: { screen: CreatePostScreen },
});

const MainNavigator = createStackNavigator(
  {
    PostsScreen: TabNavigator,
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
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "SplashScreen"
  }
);
