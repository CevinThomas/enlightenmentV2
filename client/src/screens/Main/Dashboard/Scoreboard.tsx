import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { ScoreboardScreenProps } from "../../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Scoreboard = ({ navigation }: ScoreboardScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Scoreboard</Text>
      <Button title={"Go Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Scoreboard;
