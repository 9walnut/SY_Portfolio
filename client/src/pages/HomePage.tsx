import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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

const SocialIconsContainer = styled.div`
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s;
  &:hover {
    color: #ccc;
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <AnimatedText>Welcome to My Portfolio</AnimatedText>
      <p>Explore my projects and feel free to reach out.</p>
      <SocialIconsContainer>
        <SocialIcon href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
      </SocialIconsContainer>
    </HomePageContainer>
  );
};

export default HomePage;
