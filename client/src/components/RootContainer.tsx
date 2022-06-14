import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #00334f;
`;

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RootContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default RootContainer;
