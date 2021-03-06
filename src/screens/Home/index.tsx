import React from "react";
import { Sidebar } from "../../components";
import { Main } from "./components";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 5rem;
`;

const HomePage = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default HomePage;
