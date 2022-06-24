import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { DashboardScreenProps } from "../../../navigation/types";

const Dashboard = ({ navigation }: DashboardScreenProps) => {
  const [viewQuizModal, setViewQuizModal] = useState(false);

  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Text>WELCOME BACK</Text>
      <Text>STATISTICS</Text>
      <Text>0% - 22% - 32</Text>
      <Button
        title={"View all statistics"}
        onPress={() => navigation.navigate("Statistics")}
      />
      <View>
        <Text>Ongoing quiz</Text>
        <Button
          title={"Continue quiz"}
          onPress={() => {
            navigation.navigate("Quiz");
          }}
        />
        <Text>Newest Quiz! (Move to explore page)</Text>
        <Button
          title={"View newest quiz!"}
          onPress={() => setViewQuizModal(true)}
        />
        <Text>History of Results</Text>
        <Text>Results 1</Text>
        <Text>Results 2</Text>
        <Text>Results 3</Text>
        <Button
          title={"View all results"}
          onPress={() => navigation.navigate("Results")}
        />
        <Text>Top Performers (Scoreboard)?</Text>
        <View
          style={{
            justifyContent: "center",
            height: 100,
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white" }}>Coworker 1</Text>
          <Text style={{ color: "white" }}>Coworker 2</Text>
          <Text style={{ color: "white" }}>Coworker 3</Text>
        </View>
        <Button
          title={"View scoreboards"}
          onPress={() => navigation.navigate("Scoreboard")}
        />
        {viewQuizModal && (
          <Modal
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              height: "70%",
              width: "100%",
              position: "absolute",
              margin: 0,
              bottom: 0,
            }}
            backdropOpacity={0.5}
            onBackdropPress={() => setViewQuizModal(false)}
            animationIn={"slideInUp"}
            animationOut={"slideOutUp"}
            onSwipeComplete={() => setViewQuizModal(false)}
            isVisible
          >
            <View
              style={{
                height: "100%",
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  zIndex: 9,
                  right: 0,
                }}
              >
                <Button
                  title={"Close Modal"}
                  onPress={() => setViewQuizModal(false)}
                />
              </View>

              <Image
                source={require("../../../assets/jpgs/elephant-g554b29d92_1920.jpg")}
                style={{
                  height: 200,
                  width: "100%",
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                }}
              />

              <View style={{ backgroundColor: "gray" }}>
                <Text>AUTHOR DESC</Text>
                <Text>Image</Text>
                <Text>Name: </Text>
                <Text>Role: </Text>
              </View>
              <Text>APPROVAL RATING AVERAGE</Text>
              <Text>QUIZ DESCRIPTION</Text>
              <Text>DATE CREATED</Text>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Button
                  title={"Take Quiz!"}
                  onPress={() => {
                    setViewQuizModal(false);
                    navigation.navigate("Quiz");
                  }}
                />
                <Button
                  title={"Save for later?"}
                  onPress={() => setViewQuizModal(false)}
                />
              </View>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { position: "relative" },
});

export default Dashboard;
