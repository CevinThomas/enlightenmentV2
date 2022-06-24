import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryScreenProps } from "../../../navigation/types";

interface Props {}

const Category = ({ navigation }: CategoryScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Category details</Text>
      <Button title={"Go back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Category;
