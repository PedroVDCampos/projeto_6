import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeContainer>
      <Title>Bem-vindo ao eFood</Title>
      <Description>
        Descubra os melhores restaurantes e pratos deliciosos!
      </Description>
      <StartButton to="/profile">Começar</StartButton>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 2rem;
`;

const StartButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5757;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #e04e4e;
  }
`;

export default Home;
