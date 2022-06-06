import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { WelcomeScreenProps } from "../../../navigation/types";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Welcome;
