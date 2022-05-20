import React from "react";
import styled from "styled-components";
import { Sidebar } from "../../components";

const Container = styled.div`
  padding-top: 5rem;
`;

const TermsOfUsePage = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default TermsOfUsePage;
