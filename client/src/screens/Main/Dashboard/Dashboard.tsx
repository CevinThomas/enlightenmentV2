import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Dashboard = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Dashboard;
