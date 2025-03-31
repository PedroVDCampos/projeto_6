import styled from "styled-components";

const Button = styled.button`
  background-color: #ff5757;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e04e4e;
  }
`;

export default Button;
