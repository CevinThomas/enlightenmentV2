import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardStackNavigator,
  ExploreStackNavigator,
  HelpStackNavigator,
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
      <Tab.Screen name="Explore" component={ExploreStackNavigator} />
      <Tab.Screen name="Help" component={HelpStackNavigator} />
    </Tab.Navigator>
  );
}
