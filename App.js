import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation'

import { Onboarding } from './components/Onboarding'
import { Login } from './components/Login'
import { Signup } from './components/Signup'

// class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text
//           onPress={() => navigate('Login')}>Go to Login
//         </Text>
//       </View>
//     )
//   }
// }

// class LoginScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Login',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text
//           onPress={() => navigate('Onboarding')}>Go to Onboarding
//         </Text>
//       </View>
//     )
//   }
// }

const NavigationApp = createStackNavigator({
  Onboarding: { screen: Onboarding },
  Login: { screen: Login },
  Signup: { screen: Signup },
  // Posts: { screen: Posts },
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
