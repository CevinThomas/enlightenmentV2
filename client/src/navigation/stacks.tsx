import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Main/Dashboard/Dashboard";

const DashboardStack = createNativeStackNavigator();
export const DashboardStackNavigator = () => {
  return (
    <NavigationContainer>
      <DashboardStack.Screen name={"Dashboard"} component={Dashboard} />
    </NavigationContainer>
  );
};
