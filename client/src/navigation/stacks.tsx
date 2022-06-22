import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Main/Dashboard/Dashboard";
import Welcome from "../screens/Auth/Welcome/Welcome";
import {
  AuthStackParams,
  DashboardStackParams,
  ExploreStackParams,
  HelpStackParams,
  OnboardStackParams,
} from "./types";
import Register from "../screens/Auth/Register/Register";
import Login from "../screens/Auth/Login/Login";
import Department from "../screens/Onboarding/Department";
import Role from "../screens/Onboarding/Role";
import Explore from "../screens/Main/Explore/Explore";
import Help from "../screens/Main/Help/Help";
import PushRequest from "../screens/Onboarding/PushRequest";

const mainScreensOptions = {
  headerShown: false,
};

const HelpStack = createNativeStackNavigator<HelpStackParams>();
export const HelpStackNavigator = () => {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        options={mainScreensOptions}
        name={"Main"}
        component={Help}
      />
    </HelpStack.Navigator>
  );
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();
export const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        options={mainScreensOptions}
        name={"Main"}
        component={Explore}
      />
    </ExploreStack.Navigator>
  );
};

const DashboardStack = createNativeStackNavigator<DashboardStackParams>();
export const DashboardStackNavigator = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        options={mainScreensOptions}
        name={"Main"}
        component={Dashboard}
      />
    </DashboardStack.Navigator>
  );
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={"Welcome"}
        component={Welcome}
        options={mainScreensOptions}
      />
      <AuthStack.Screen
        name={"Register"}
        component={Register}
        options={mainScreensOptions}
      />
      <AuthStack.Screen
        name={"Login"}
        component={Login}
        options={mainScreensOptions}
      />
    </AuthStack.Navigator>
  );
};

const OnboardStack = createNativeStackNavigator<OnboardStackParams>();
export const OnboardStackNavigator = () => {
  return (
    <OnboardStack.Navigator>
      <OnboardStack.Screen
        options={mainScreensOptions}
        name={"Department"}
        component={Department}
      />
      <OnboardStack.Screen
        options={mainScreensOptions}
        name={"Role"}
        component={Role}
      />
      <OnboardStack.Screen
        options={mainScreensOptions}
        name={"PushRequest"}
        component={PushRequest}
      />
    </OnboardStack.Navigator>
  );
};
