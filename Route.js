import Expo from 'expo';
import { createStackNavigator } from 'react-navigation'

import { Onboarding } from './src/components/Onboarding'
import { Login } from './src/components/Login'
import { Signup } from './src/components/Signup'
import { Posts } from './src/components/Posts'

export default Route = createStackNavigator({
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