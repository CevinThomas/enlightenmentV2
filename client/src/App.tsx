import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator, OnboardStackNavigator } from "./navigation/stacks";
import { useSelector } from "react-redux";
import { GlobalState } from "./redux/store";
import { BottomTabs } from "./navigation/bottomTab";

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
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
