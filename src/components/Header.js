import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <h1>eFood</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/profile">Perfil</Link>
      </NavLinks>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ff6b6b;
  color: white;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Header;
