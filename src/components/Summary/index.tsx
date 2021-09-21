import { Container } from "./styles";
import Icon from '../../assets/income.svg'
import outComeIcon from '../../assets/outcome.svg'
import Totalicon from '../../assets/total.svg'


export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Icon} alt="Entradas" />
                </header>
                <strong>R$1800,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outComeIcon} alt="Saídas"/>
                </header>
                <strong> -R$500,00</strong>
            </div>
            <div className="change-background">
                <header>
                    <p>Total</p>
                    <img src={Totalicon} alt="Total"/>
                </header>
                <strong>R$1300,00</strong>
            </div>
        </Container>
    );
}