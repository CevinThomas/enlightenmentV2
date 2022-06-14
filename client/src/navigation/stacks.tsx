import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Main/Dashboard/Dashboard";
import Welcome from "../screens/Auth/Welcome/Welcome";
import { AuthStackParams } from "./types";

const DashboardStack = createNativeStackNavigator();
export const DashboardStackNavigator = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name={"Dashboard"} component={Dashboard} />
    </DashboardStack.Navigator>
  );
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00334F",
        },
      }}
    >
      <AuthStack.Screen
        name={"Welcome"}
        component={Welcome}
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    </AuthStack.Navigator>
  );
};
