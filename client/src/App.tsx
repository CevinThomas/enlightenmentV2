import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  AuthStackNavigator,
  MainStackNavigator,
  OnboardStackNavigator,
} from "./navigation/stacks";
import { useSelector } from "react-redux";
import { GlobalState } from "./redux/store";

const App = () => {
  const state = useSelector((state: GlobalState) => state.user);

  if (!state.loggedIn) {
    return (
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    );
  }

  if (state.loggedIn && !state.completedOnboard) {
    return (
      <NavigationContainer>
        <OnboardStackNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
