import "./Card.css";

// Reusable wrapper component
// Wraps Expenses and ExpenseItem components
// Provides border-radius and box-shadow properties
function Card(props) {
  // Here in Card.js, we will not work with attributes
  // but we will work with one special prop which is build into React, which every component receives - children (a reserved name)
  // even if you are never setting it explicitly.

  // Thats the prop which value we want to output inside the opening and closing tag of the <div>

  // The value of children prop will always be the content b/w the opening and closing tags of our custom component

  // The content shows up but its broken
  // because some of the styles does not apply as Card(custom component) does not support className
  // All the default components support className for adding css classes to the rendered html elements
  //  but Custom components only support that we tell them to support
  // So we want to make sure that a className can be set on the Card component
  // We want to add whatever is set as a className
  // to the Card to the 'card' string set as a className on the div returned from this component
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
