import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { LoginScreenProps } from "../../../navigation/types";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Button
        title={"Login"}
        onPress={() => {
          dispatch({ type: "LOGIN", payload: true });
          dispatch({ type: "ONBOARD", payload: true });
        }}
      />
      <Button title={"Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Login;
