import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FooterText = styled.div<{ align?: string }>`
  text-align: ${(props) => props.align};
  margin: 0 50px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText align="right">soyeon @ 2024</FooterText>
      <FooterText align="left">Powered by HODU</FooterText>
    </FooterContainer>
  );
};

export default Footer;
