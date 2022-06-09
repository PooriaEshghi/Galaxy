import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { Transaction } from "./transaction-list";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
