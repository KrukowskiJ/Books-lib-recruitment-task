import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import ReactLogo from "./logo.svg";

const NavBar = ({  addBook, showBookList }) => {
  const [NavbarStatus, changeNavbarStatus] = useState("top");
  const navRef = React.useRef();

  navRef.current = NavbarStatus;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.3;
      if (show) changeNavbarStatus("not");
      else changeNavbarStatus("top");
    };
    document.addEventListener("scroll", handleScroll);
  });



  return (
    <>
      <Nav>
        <BackImg2/>

        <Navbox>
      <Title>Nazwa Aplikacji</Title>
      <Logo src={ReactLogo} />
      </Navbox>

      <Navbox>
          <NavLink onClick={showBookList}>Lista Książek</NavLink>
          <NavLink onClick={addBook}>Dodaj Książkę</NavLink>
      </Navbox>
      </Nav>
    </>
  );
};

export default NavBar;


const BackImg2 = styled.div`
  background: #050e1b;
  top: 0;
  position: absolute;
  height: 10vh;
  width: 100%;
`;
const Nav = styled.nav`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  margin: 0;
  z-index: 1;
`;
const Navbox = styled.div`
  display: flex;
  align-items: center;
`;
const NavLink = styled.div`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 2vw;
  padding-right: 5px;
  transition: all 0.2s ease-in;
  position: relative;
  font-size: 18px;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background:  white;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  :hover {
    text-decoration: none;
    color: white;
    ::after {
      width: 100%;
    }
  }
`

const Title = styled.text`
font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 2vw;
  padding-right: 5px;
  transition: all 0.2s ease-in;
  position: relative;
  font-size: 18px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
  z-index:2;
`;