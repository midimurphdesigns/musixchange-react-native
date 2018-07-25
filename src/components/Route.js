import Expo from "expo";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import OnboardingScreen from "./src/components/OnboardingScreen";
import { LoginScreen } from "./src/components/LoginScreen";
import { SignupScreen } from "./src/components/SignupScreen";
import PostsScreen from "./src/components/PostsScreen";

const authNavigator = createStackNavigator({
  OnboardingScreen: { screen: OnboardingScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen }
});

const mainNavigator = createStackNavigator({
  PostsScreen: { screen: PostsScreen }
});

export default (Route = createSwitchNavigator(
  {
    auth: authNavigator,
    main: mainNavigator,
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  }
));
