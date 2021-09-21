import { Fragment } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <Dashboard/>
      <TransactionTable/>
      
    </>
  );
}