import React from "react";
import { Provider } from "react-redux";
import { View } from "react-native";

import store from "./src/store";
import Route from "./Route";
import DrawerNavigation from "./DrawerNavigation";
import { AppNavigator } from './src/components/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          {/* <Route /> */}
          <AppNavigator />
          {/* <DrawerNavigation /> */}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
