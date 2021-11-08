import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <>
      <Summary />
      <TransactionTable />
    </>
  );
}
