import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { QuizzesScreenProps } from "../../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Quizzes = ({ navigation }: QuizzesScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Quizzes</Text>
      <Button title={"Go back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Quizzes;
