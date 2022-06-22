import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const Help = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Help</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Help;
