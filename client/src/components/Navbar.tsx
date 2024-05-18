import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

interface NavLinkProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav`
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const BrandLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  @media (max-width: 768px) {
    margin-right: auto;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const ToggleMenu = styled.div<NavLinkProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  background-color: rgba(128, 128, 128, 0.8);
  width: 100%;
  top: 100%;
  right: 0;
  padding: 20px;
  transition: all 0.3s ease;
  @media (min-width: 769px) {
    display: flex;
    position: static;
    background-color: transparent;
    width: auto;
    padding: 0;
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;
  transition: color 0.3s;
  @media (min-width: 769px) {
    margin: 0 20px;
  }

  &:hover {
    text-decoration: underline;
    color: #555;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <BrandLink to="/">soyeon</BrandLink>
      <MenuContainer>
        <MenuIcon onClick={toggleMenu}>
          <FaBars />
        </MenuIcon>
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
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
