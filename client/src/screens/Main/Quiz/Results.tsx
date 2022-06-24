import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { ResultsScreenProps } from "../../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const Results = ({ navigation }: ResultsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Results</Text>
      <Button
        title={"Back to dashboard!"}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "BottomTabs" }],
          })
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Results;
