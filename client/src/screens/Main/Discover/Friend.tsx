import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { FriendScreenProps } from "../../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Friend = ({ navigation }: FriendScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Friend</Text>
      <Button title={"Go back"} onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Friend;
