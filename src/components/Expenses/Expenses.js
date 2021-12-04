import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2019');

    const filterChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpense = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    let expenseContent = <p>No Content found</p>;

    if(filteredExpense.length > 0) {
        expenseContent = filteredExpense.map(expense =>
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        );
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}
        </Card>
    );
}

export default Expenses;