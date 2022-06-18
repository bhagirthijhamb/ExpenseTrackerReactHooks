import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpenseMode, setAddExpenseMode] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setAddExpenseMode(true);
  };

  const stopEditingHandler = () => {
    setAddExpenseMode(false);
  };

  return (
    <div className="new-expense">
      {!addExpenseMode && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {addExpenseMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
