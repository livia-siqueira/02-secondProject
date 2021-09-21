import { Container } from "../TransactionsTable/styles";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Software</td>
                        <td>R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>12/07/2021</td>

                    </tr>
                    <tr>
                        <td>Desenvolvimento de Software</td>
                        <td>R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>12/07/2021</td>

                    </tr>
                </tbody>
            </table>
        </Container>
    );
}