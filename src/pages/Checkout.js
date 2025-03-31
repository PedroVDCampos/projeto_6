import React from "react";
import styled from "styled-components";

function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutTitle>Finalizar Compra</CheckoutTitle>
      <Input type="text" placeholder="Nome Completo" />
      <Input type="text" placeholder="Endereço" />
      <Input type="text" placeholder="Número do Cartão" />
      <CheckoutButton>Confirmar Pedido</CheckoutButton>
    </CheckoutContainer>
  );
}

const CheckoutContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CheckoutTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckoutButton = styled.button`
  background-color: #ff5757;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #e04e4e;
  }
`;

export default Checkout;
