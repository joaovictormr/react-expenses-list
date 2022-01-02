import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenseData, setExpenseData] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenseData((prevExpenseData) => {
      return [expense, ...prevExpenseData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenseData} />
    </div>
  );
};

export default App;
