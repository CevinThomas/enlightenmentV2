import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { PushRequestScreenProps } from "../../navigation/types";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const PushRequest = ({ navigation }: PushRequestScreenProps) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text>PushRequest</Text>
      <Button
        title={"Done with Onboarding!"}
        onPress={() =>
          dispatch({
            type: "ONBOARD",
            payload: true,
          })
        }
      />
      <Button title={"Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PushRequest;
