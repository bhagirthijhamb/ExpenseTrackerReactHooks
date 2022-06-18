import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 21);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 250.67;

  return (
    // Out of the box we cannot use custom components (like Card component) as wrapers around other content
    // Having content b/w opening and closing tags just works for built-in HTML elements like <div>
    // but we can build such reusable wrapper components (see Card.js)
    // <div className="expense-item">
    // className on Card acts like a custom attribute r/t standard className attribute used to set classes
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* </div> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
