import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import { AppNavigator } from './src/components/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <AppNavigator />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
