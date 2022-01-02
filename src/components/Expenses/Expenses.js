import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState();

  const filterChangeHandler = (year) => {
    console.log("VEIO AQUI 2");
    setSelectedYear(year);
  };

  const filteredExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  console.log("filteredExpense", filteredExpense);

  React.useEffect(() => {
    console.log("VEIO AQUI");
    const yearsArray = [];
    for (let expense of props.data) {
      let expenseYear = expense.date.getFullYear().toString();
      if (yearsArray.indexOf(expenseYear) === -1) {
        yearsArray.push(expenseYear);
      }
    }
    yearsArray.sort((a, b) => a - b);
    setAvailableYears(yearsArray);
    if (!selectedYear) {
      setSelectedYear(yearsArray[0]);
    }
  }, [props.data]);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
        years={availableYears}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
