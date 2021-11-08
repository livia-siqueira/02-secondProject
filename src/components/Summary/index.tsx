import { Container } from "./styles";
import Icon from '../../assets/income.svg'
import outComeIcon from '../../assets/outcome.svg'
import Totalicon from '../../assets/total.svg'
import { useTransaction } from "../../hooks/useTransactions";


function formatNumber(number: Number) {
     return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(number))
}

export function Summary(){
    const {transactions} = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
           acc.deposits += transaction.amount; 
           acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    });
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Icon} alt="Entradas" />
                </header>
                <strong>
               {formatNumber(summary.deposits)}
               </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outComeIcon} alt="Saídas"/>
                </header>
                <strong> - {formatNumber(summary.withdraw)}</strong>
            </div>
            <div className="change-background">
                <header>
                    <p>Total</p>
                    <img src={Totalicon} alt="Total"/>
                </header>
                <strong>{formatNumber(summary.total)}</strong>
            </div>
        </Container>
    );
}