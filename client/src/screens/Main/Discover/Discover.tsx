import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabView } from "react-native-tab-view";
import { DiscoverScreenProps } from "../../../navigation/types";

enum TabRoutes {
  Top,
  Categories,
  Friends,
}

const TabRoutesTitles = (TabRoute: TabRoutes): string => {
  switch (TabRoute) {
    case TabRoutes.Top:
      return "Top";

    case TabRoutes.Categories:
      return "Categories";
    case TabRoutes.Friends:
      return "Friends";
  }
};

const Discover = ({ navigation }: DiscoverScreenProps) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: TabRoutes.Top, title: TabRoutesTitles(TabRoutes.Top) },
    { key: TabRoutes.Categories, title: TabRoutesTitles(TabRoutes.Categories) },
    { key: TabRoutes.Friends, title: TabRoutesTitles(TabRoutes.Friends) },
  ]);

  const TopRoute = () => (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text>Top Rated Quizzes (top 2 or 3)</Text>
        <Button
          title={"See All"}
          onPress={() => navigation.navigate("Quizzes")}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>QUIZ 1 WITH ARROW CTA</Text>
        <Text>QUIZ 2 WITH ARROW CTA</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>Friends</Text>
        <Text>Top points friend</Text>
        <Text>Second place</Text>
        <Text>Third place</Text>
      </View>
    </View>
  );

  const CategoriesRoute = () => (
    <View style={{ flex: 1 }}>
      <Text>Category 1</Text>
      <Button
        title={"View category"}
        onPress={() => navigation.navigate("Category")}
      />
      <Text>Category 2</Text>
    </View>
  );

  const FriendsRoute = () => (
    <View style={{ flex: 1 }}>
      <Text>CAN CHALLENGE A FRIEND TO A QUIZ THEY HAVE NOT TAKEN YET?</Text>
      <Text>Friend 1</Text>
      <Button
        title={"View friend"}
        onPress={() => navigation.navigate("Friend")}
      />
      <Text>Friend 2</Text>
      <Text>Friend 3</Text>
    </View>
  );

  const renderScene = SceneMap({
    [TabRoutes.Top]: TopRoute,
    [TabRoutes.Categories]: CategoriesRoute,
    [TabRoutes.Friends]: FriendsRoute,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>SELECT DEPARTMENT (SOFTWARE, MARKETING ETC)</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",

          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Software</Text>
      </View>
      <View
        style={{
          flex: 10,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>DISCOVER QUIZZES</Text>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});

export default Discover;
