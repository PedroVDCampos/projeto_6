import React from "react";
import styled from "styled-components";

function Cart() {
  return (
    <CartContainer>
      <CartTitle>Meu Carrinho</CartTitle>
      <CartItem>
        <span>Produto 1</span>
        <CartButton>Remover</CartButton>
      </CartItem>
      <CartItem>
        <span>Produto 2</span>
        <CartButton>Remover</CartButton>
      </CartItem>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CartTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const CartButton = styled.button`
  background-color: #ff5757;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #e04e4e;
  }
`;

export default Cart;
