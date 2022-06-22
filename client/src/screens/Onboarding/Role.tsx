import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { RoleScreenProps } from "../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Role = ({ navigation }: RoleScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Role</Text>
      <Button
        title={"Next"}
        onPress={() => navigation.navigate("PushRequest")}
      />
      <Button title={"Back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Role;
