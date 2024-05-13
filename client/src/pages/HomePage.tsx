import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/images/hodu2.jpg";

const HomePageContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const AnimatedText = styled.h1`
  animation: fadeIn 2s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <AnimatedText>Welcome to My Portfolio</AnimatedText>
      <p>Explore my projects and feel free to reach out.</p>
      {/* 이곳에 추가적인 컴포넌트나 내용을 넣을 수 있습니다. */}
    </HomePageContainer>
  );
};

export default HomePage;
