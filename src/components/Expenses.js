import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    console.log("expense", expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // // Outputting conditional content
  // let expensesContent = <p>No expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      {/* <div className="expenses"> */}
      <Card className="expenses">
        {/* this makes ExpensesFilter component as a controlled component */}
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={yearChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
        {/* {props.expenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* Outputting filtered expenses */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* // Outputting conditional content */}
        {/* {expensesContent} */}
        <ExpensesList expenses={filteredExpenses} />
      </Card>
      {/* </div> */}
    </div>
  );
}

export default Expenses;
