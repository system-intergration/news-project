import React from "react";
import styled from "styled-components";
import { Sidebar } from "../../components";

const Container = styled.div`
  padding-top: 5rem;
`;
const PrivacyPolicyPage = () => {
  return (
    <Container>
      <Sidebar />
      <div>PrivacyPolicyPage</div>
    </Container>
  );
};

export default PrivacyPolicyPage;
