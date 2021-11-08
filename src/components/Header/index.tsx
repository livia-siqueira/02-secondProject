import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

interface propsModal{
  onOpenNewTransactionModal: () => void
}



export function Header(props: propsModal) {
 

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtMoney" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova Transação
        </button>

        
      </Content>
      
    </Container>
  );
}
