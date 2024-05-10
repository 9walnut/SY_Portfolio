// src/pages/HomePage.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const Navigation = styled.nav`
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #0077cc;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>My Design Portfolio</Title>
      <Description>
        Welcome to my personal design portfolio. Explore my work and feel free
        to reach out.
      </Description>
      <Navigation>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Container>
  );
};

export default HomePage;
