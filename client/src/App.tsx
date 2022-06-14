import React from "react";
import { AuthStackNavigator } from "./navigation/stacks";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;
