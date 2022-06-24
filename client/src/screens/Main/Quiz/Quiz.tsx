import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { QuizScreenProps } from "../../../navigation/types";

const Quiz = ({ navigation }: QuizScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Quiz</Text>
      <Button
        title={"See Results!"}
        onPress={() => navigation.navigate("Results")}
      />
      <Button
        title={"End quiz early"}
        onPress={() => navigation.navigate("BottomTabs")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Quiz;
