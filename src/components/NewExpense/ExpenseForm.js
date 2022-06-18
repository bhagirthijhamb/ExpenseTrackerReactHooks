import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); // the default value that we get from an input is a string
  const [enteredDate, setEnteredDate] = useState(""); // even for a number or date input
  // const [addExpenseMode, setAddExpenseMode] = useState(false);

  // ********__________********
  // Alternative
  // const [userInout, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  // const titleChangeHandler = (e) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: e.target.value,
  //   // })
  //   // whenever our new state depends on the previous state
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState, enteredTitle: e.target.value
  //     }
  //   })
  // }
  // ********__________********

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // setAddExpenseMode(false);
    // console.log("expenseData", expenseData);
    props.onCancel();
  };

  // if (!addExpenseMode) {
  //   return (
  //     <div className="new-expense__actions">
  //       <button onClick={() => setAddExpenseMode(true)}>Add new expense</button>
  //     </div>
  //   );
  // }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* <button onClick={() => setAddExpenseMode(false)}>Cancel</button> */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
