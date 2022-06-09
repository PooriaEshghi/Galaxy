import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((Transaction) => Transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h3>Your Balance</h3>
      <h1>{total}</h1>
    </>
  );
};
export default Balance;
