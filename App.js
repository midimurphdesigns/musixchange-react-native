import React from "react";
import { Provider } from 'react-redux';
import store from './src/store'

import Route from './Route'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
