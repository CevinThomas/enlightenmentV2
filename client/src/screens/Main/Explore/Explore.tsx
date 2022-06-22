import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const Explore = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Explore</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Explore;
