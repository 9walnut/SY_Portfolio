import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

interface NavLinkProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const MenuIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: block;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ToggleMenu = styled.div<NavLinkProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: rgba(128, 128, 128, 0.8); /* Grey with transparency */
  width: 100%;
  top: 100%;
  left: 0;
  padding: 20px 0;
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <ToggleMenu isOpen={isOpen}>
        <NavLink to="/" onClick={toggleMenu}>
          Main
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/works" onClick={toggleMenu}>
          Works
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
      </ToggleMenu>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
    </NavbarContainer>
  );
};

export default Navbar;
