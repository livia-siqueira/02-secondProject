import Modal from "react-modal";
import { Button, Container, ContainerTypeTransaction } from "./styles";
import CloseImg from "../../assets/close.svg";
import EntryImg from "../../assets/income.svg";
import OutImg from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import { api } from "../services/api";
import { useTransaction } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal(props: NewTransactionModalProps) {
  const {createTransaction} = useTransaction();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState("deposit");


  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction ({
      title,amount, category, type
    })
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    props.onRequestClose();
  }
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Close modal"></img>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Nome"  value={title} onChange={(event) => setTitle(event.target.value)} />
        <input placeholder="Valor" type="number" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
        <ContainerTypeTransaction>
          <Button
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            isColor = 'green'
          >
            <img src={EntryImg} />
            <span>Entrada</span>
          </Button>
          <Button
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            isColor = 'red'
          >
            <img src={OutImg} />
            <span>Saida</span>
          </Button>
        </ContainerTypeTransaction>
        <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
