import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DashResultsScreenProps } from "../../../navigation/types";

const DashboardResults = ({ navigation }: DashResultsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard statistics</Text>
      <Button title={"Go back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DashboardResults;
