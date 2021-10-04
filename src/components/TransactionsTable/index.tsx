import { useEffect } from "react";
import { Container } from "../TransactionsTable/styles";
import { api } from "../services/api";

export function TransactionTable() {
  useEffect(() => {
      api.get('/transactions').then((response: { data: any; }) => console.log(response.data))
  }, []);
  
    return (
    <Container>
      <table>
        <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trabalho</td>
            <td className="deposit">R$1000</td>
            <td>Programação - Projeto LabLuby</td>
            <td>12/07/2021</td>
          </tr>
          <tr>
            <td>Inglês</td>
            <td className="withdraw">-R$250,00</td>
            <td>Formação</td>
            <td>01/08/2021</td>
          </tr>
          <tr>
            <td>Academia</td>
            <td className="withdraw">-R$85,00</td>
            <td>Exercicios Fisico</td>
            <td>01/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
