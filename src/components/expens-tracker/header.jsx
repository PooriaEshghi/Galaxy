import Balance from "./balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./transactionList";
import AddTransaction from "./addTransaction";

const Header = () => {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};
export default Header;
