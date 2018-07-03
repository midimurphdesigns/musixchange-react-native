import React from "react";
import { Provider } from 'react-redux';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { StyleSheet, Image } from "react-native";
import { Container, Content, Header, Body, Icon } from 'native-base';

import store from './src/store';
import Route from './Route';
import { HomeScreen } from './src/components/HomeScreen';
import { LoginScreen } from './src/components/LoginScreen';
import { SignupScreen} from './src/components/SignupScreen';
import PostsScreen from './src/components/PostsScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Route /> */}
        <MyApp />
      </Provider>
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height:200, backgroundColor: 'white'}}>
      <Body>
        <Image 
          style={styles.drawerImage}
          source={require('./src/images/m-logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MyApp = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  PostsScreen: { screen: PostsScreen },
}, {
  initialRouteName: 'HomeScreen',
  contentComponent: CustomDrawerContentComponent,
  DrawerOpenRoute: 'DrawerOpen',
  DrawerCloseRoute: 'DrawerClose',
  DrawerToggleRoute: 'DrawerToggle',
})

styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
})

export default App;
