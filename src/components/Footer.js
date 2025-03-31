import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      &copy; 2024 eFood. Todos os direitos reservados.
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #333;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export default Footer;
