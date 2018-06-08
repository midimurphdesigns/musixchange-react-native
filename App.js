import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation'

import { Onboarding } from './src/components/Onboarding'
import { Login } from './src/components/Login'
import { Signup } from './src/components/Signup'
import { Posts } from './src/components/Posts'

const NavigationApp = createStackNavigator({
  Onboarding: { screen: Onboarding },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Posts: { screen: Posts },
}, {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  });

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
