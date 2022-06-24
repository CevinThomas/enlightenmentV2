import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { StatisticsScreenProps } from "../../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Statistics = ({ navigation }: StatisticsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Statistics</Text>
      <Button title={"Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Statistics;
