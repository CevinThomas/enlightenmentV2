import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { DepartmentScreenProps } from "../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Department = ({ navigation }: DepartmentScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Department</Text>
      <Button title={"Next"} onPress={() => navigation.navigate("Role")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Department;
