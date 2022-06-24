import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardStackNavigator,
  ExploreStackNavigator,
  ResourcesStackNavigator,
} from "./stacks";
import React from "react";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          height: 0,
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardStackNavigator} />
      <Tab.Screen name="Discover" component={ExploreStackNavigator} />
      <Tab.Screen name="Resources" component={ResourcesStackNavigator} />
    </Tab.Navigator>
  );
}
