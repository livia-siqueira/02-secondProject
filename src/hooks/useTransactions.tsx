import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../components/services/api";


interface Transaction{
    id: number,
    title: string,
    type: string,
    amount: number,
    category: string,
    createAt: string
  
}

//interface TransactionInput{
//    title: string,
//    type: string,
//    amount: number,
//    category: string,
//}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'> // com typescript

interface TransactionProviderProps {
    children: ReactNode; //qualquer coisa
}

interface TransactionData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionData>(
    {} as TransactionData
); 


export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
 
  useEffect(() => {
      api.get('/transactions').then((response: { data: any; }) => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(newTransaction: TransactionInput){
    const responseData = await api.post('/transactions', {
        ...newTransaction, 
        createAt: new Date()
    });
    
    const {transaction} = responseData.data;

    setTransactions([
        ...transactions,
        transaction
    ]);
}

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
        {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}