import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          {props.years.length ? (
            props.years.map((year) => <option value={year}>{year}</option>)
          ) : (
            <option>---</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
