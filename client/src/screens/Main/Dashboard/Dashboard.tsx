import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { DashboardScreenProps } from "../../../navigation/types";

const Dashboard = ({ navigation }: DashboardScreenProps) => {
  const [viewQuizModal, setViewQuizModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "gray",
            borderRadius: 400,
          }}
        ></View>
        <Text>PROFILE IMAGE</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text>STATISTICS</Text>
        <Text>0% - 22% - 32</Text>
        <Button
          title={"View all statistics"}
          onPress={() => navigation.navigate("Statistics")}
        />
      </View>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Ongoing quiz</Text>
          <Button
            title={"Continue quiz"}
            onPress={() => {
              navigation.navigate("Quiz");
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text>Newest Quiz! (Move to explore page)</Text>
          <Button
            title={"View newest quiz!"}
            onPress={() => setViewQuizModal(true)}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
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
        </View>

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
