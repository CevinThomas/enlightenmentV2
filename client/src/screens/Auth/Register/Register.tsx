import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { RegisterScreenProps } from "../../../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({ navigation }: RegisterScreenProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: GlobalState) => state.user);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{state.loggedIn.toString()}</Text>
      <Button
        title={"Complete Registration"}
        onPress={() => dispatch({ type: "LOGIN", payload: true })}
      />
      <Button title={"Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Register;
