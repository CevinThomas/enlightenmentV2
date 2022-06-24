import React from "react";
import { Button, StyleSheet } from "react-native";
import { RegisterScreenProps } from "../../../navigation/types";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({ navigation }: RegisterScreenProps) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
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
