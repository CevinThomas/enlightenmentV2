import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const Resources = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Resources</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Resources;
