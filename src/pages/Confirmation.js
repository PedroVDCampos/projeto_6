import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <ConfirmationContainer>
      <Title>Pedido Confirmado!</Title>
      <Message>Obrigado por sua compra. Seu pedido está a caminho!</Message>
      <BackButton to="/">Voltar para Home</BackButton>
    </ConfirmationContainer>
  );
}

const ConfirmationContainer = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h2`
  color: #28a745;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
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

export default Confirmation;
