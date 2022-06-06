import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Main/Dashboard/Dashboard";
import Welcome from "../screens/Auth/Welcome/Welcome";
import { AuthStackParams } from "./types";

const DashboardStack = createNativeStackNavigator();
export const DashboardStackNavigator = () => {
  return (
    <NavigationContainer>
      <DashboardStack.Screen name={"Dashboard"} component={Dashboard} />
    </NavigationContainer>
  );
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();
export const AuthStackNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Screen name={"Welcome"} component={Welcome} />
    </NavigationContainer>
  );
};
