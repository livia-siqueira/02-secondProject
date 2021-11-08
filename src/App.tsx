import { Fragment, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {NewTransactionModal} from './components/NewTransactionModal';
import { TransactionProvider } from "./hooks/useTransactions";

//acessibilidade

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
  useState(false);

function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false);
}

  //por que essas funções não ficaram dentro do componente modal?
  //aqui elas podem ser acessadas de mais lugares
  // as funções estão no App todo. Redux
  //<Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
  //<h2>Cadastrar Transação</h2>
//</Modal>

  return (
    <TransactionProvider>
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Dashboard />
    </TransactionProvider>
  );
}
