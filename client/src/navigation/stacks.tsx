import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Main/Dashboard/Dashboard";
import Welcome from "../screens/Auth/Welcome/Welcome";
import {
  AuthStackParams,
  DashboardStackParams,
  DiscoverStackParams,
  MainStackParams,
  OnboardStackParams,
  QuizStackParams,
  ResourcesStackParams,
} from "./types";
import Register from "../screens/Auth/Register/Register";
import Login from "../screens/Auth/Login/Login";
import Department from "../screens/Onboarding/Department";
import Role from "../screens/Onboarding/Role";
import Discover from "../screens/Main/Discover/Discover";
import Resources from "../screens/Main/Resources/Resources";
import PushRequest from "../screens/Onboarding/PushRequest";
import Statistics from "../screens/Main/Dashboard/Statistics";
import Quiz from "../screens/Main/Quiz/Quiz";
import { BottomTabs } from "./bottomTab";
import Results from "../screens/Main/Quiz/Results";
import DashboardResults from "../screens/Main/Dashboard/Results";
import Scoreboard from "../screens/Main/Dashboard/Scoreboard";
import Quizzes from "../screens/Main/Discover/Quizzes";
import Friend from "../screens/Main/Discover/Friend";
import Category from "../screens/Main/Discover/Category";

const mainScreensOptions = {
  headerShown: false,
};

const ResourcesStack = createNativeStackNavigator<ResourcesStackParams>();
export const ResourcesStackNavigator = () => {
  return (
    <ResourcesStack.Navigator>
      <ResourcesStack.Screen
        options={mainScreensOptions}
        name={"Main"}
        component={Resources}
      />
    </ResourcesStack.Navigator>
  );
};

const ExploreStack = createNativeStackNavigator<DiscoverStackParams>();
export const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        options={mainScreensOptions}
        name={"Main"}
        component={Discover}
      />
      <ExploreStack.Screen
        options={mainScreensOptions}
        name={"Quizzes"}
        component={Quizzes}
      />
      <ExploreStack.Screen
        options={mainScreensOptions}
        name={"Friend"}
        component={Friend}
      />
      <ExploreStack.Screen
        options={mainScreensOptions}
        name={"Category"}
        component={Category}
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
      <DashboardStack.Screen
        options={mainScreensOptions}
        name={"Statistics"}
        component={Statistics}
      />
      <DashboardStack.Screen
        options={mainScreensOptions}
        name={"Results"}
        component={DashboardResults}
      />
      <DashboardStack.Screen
        options={mainScreensOptions}
        name={"Scoreboard"}
        component={Scoreboard}
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

const QuizStack = createNativeStackNavigator<QuizStackParams>();
export const QuizStackNavigator = () => {
  return (
    <QuizStack.Navigator
      screenOptions={{
        statusBarHidden: true,
        headerShown: false,
      }}
    >
      <QuizStack.Screen name={"Main"} component={Quiz} />
      <QuizStack.Screen name={"Results"} component={Results} />
    </QuizStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator<MainStackParams>();
export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={mainScreensOptions}>
      <MainStack.Screen name={"BottomTabs"} component={BottomTabs} />
      <MainStack.Screen name={"Quiz"} component={QuizStackNavigator} />
    </MainStack.Navigator>
  );
};
