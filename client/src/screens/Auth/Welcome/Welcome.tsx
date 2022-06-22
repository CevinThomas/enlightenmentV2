import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import RootContainer from "../../../components/RootContainer";
import { WelcomeScreenProps } from "../../../navigation/types";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BottomContainer = styled.View`
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
`;

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  return (
    <RootContainer>
      <Container>
        <BottomContainer>
          <Button
            title={"Login"}
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title={"Register"}
            onPress={() => navigation.navigate("Register")}
          />
        </BottomContainer>
      </Container>
    </RootContainer>
  );
};

export default Welcome;
