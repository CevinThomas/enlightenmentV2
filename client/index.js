/**
 * @format
 */

import App from "./src/App";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import configureStore from "./src/redux/store";
import { Provider } from "react-redux";
import React from "react";

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
