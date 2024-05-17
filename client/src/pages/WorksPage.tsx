import React from "react";
import WorksList from "../components/WorksList";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const WorksPage: React.FC = () => {
  return (
    <Container>
      <Heading>My Works</Heading>
      <WorksList />
    </Container>
  );
};

export default WorksPage;
