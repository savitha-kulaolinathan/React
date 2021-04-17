import React, { useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const onChangedHandler = () => {
    setTitle('updated')
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="item-description">
        <h2>{title}</h2>
        <div className="item-price">${props.amount}</div>
      </div>
      <button onClick={onChangedHandler}>Change Title</button>
    </Card>
  );
};
export default ExpensesItem;
