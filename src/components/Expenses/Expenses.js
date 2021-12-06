import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2019');

    const filterChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpense = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpense}/>
        </Card>
    );
}

export default Expenses;