import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import RootContainer from "../../../components/RootContainer";

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
  border-top-left-radius: 20;
  border-top-right-radius: 20;
`;

const Welcome = () => {
  return (
    <RootContainer>
      <Container>
        <BottomContainer>
          <Text>Hello</Text>
        </BottomContainer>
      </Container>
    </RootContainer>
  );
};

export default Welcome;
