import type { Node } from "react";
import React from "react";
import { Text } from "react-native";
import { AuthStackNavigator } from "./navigation/stacks";

const App: () => Node = () => {
  return <AuthStackNavigator />;
};

export default App;
