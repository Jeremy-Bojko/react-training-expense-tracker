import './ExpenseItem.css';

function ExpenseItem(props) {
    const day = props.date.toLocaleDateString('fr-FR', { day: 'numeric' });
    const month = props.date.toLocaleDateString('fr-FR', { month: 'long' });
    const year = props.date.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{ day }</div>
                <div>{ month }</div>
                <div>{ year }</div>
            </div>
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">{ props.amount.toFixed(2) }€</div>
            </div>
        </div>
    )
}

export default ExpenseItem;