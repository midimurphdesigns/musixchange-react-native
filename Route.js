import Expo from 'expo';
import { createStackNavigator } from 'react-navigation'

import { HomeScreen } from './src/components/HomeScreen'
import { LoginScreen } from './src/components/LoginScreen'
import { SignupScreen } from './src/components/SignupScreen'
import PostsScreen from './src/components/PostsScreen'

export default Route = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
    SignupScreen: { screen: SignupScreen },
    PostsScreen: { screen: PostsScreen },
}, {
        navigationOptions: {
            headerStyle: {
                marginTop: Expo.Constants.statusBarHeight
            }
        }
    });