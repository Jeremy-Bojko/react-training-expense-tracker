import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const handleClick = (name) => console.log(`Clicked by ${name} item!!`);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">{ props.amount.toFixed(2) }€</div>
            </div>
            <button onClick={() => {handleClick(props.title)}}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;