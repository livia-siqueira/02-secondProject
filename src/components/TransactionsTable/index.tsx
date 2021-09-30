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
            <td>Desenvolvimento de Software</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>12/07/2021</td>
          </tr>
          <tr>
            <td>Água</td>
            <td className="withdraw">-R$80,00</td>
            <td>Casa</td>
            <td>01/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
