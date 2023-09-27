import { useState } from "react";
import "../App.css";

import BudgetDashboard from "../components/BudgetDashboard";

function Home() {
  const [transactions, setTransactions] = useState([]);

  const onAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    console.log("Adding transaction:", transaction);
  };

  return (
    <>
      <BudgetDashboard onAddTransaction={onAddTransaction} />
    </>
  );
}

export default Home;
