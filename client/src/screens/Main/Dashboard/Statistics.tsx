import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatisticsScreenProps } from "../../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Statistics = ({ navigation }: StatisticsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Statistics</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text>History of Results</Text>
        <Text>Results 1</Text>
        <Text>Results 2</Text>
        <Text>Results 3</Text>
        <Button
          title={"View all results"}
          onPress={() => navigation.navigate("Results")}
        />
      </View>
      <Button title={"Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Statistics;
