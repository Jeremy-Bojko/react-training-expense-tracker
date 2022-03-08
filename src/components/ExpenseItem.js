import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 2, 8);
    const expenseTitle = 'Achat fruits et légumes 🥦 🍊';
    const expenseAmount = 10.50;
    
    return (
        <div className="expense-item">
            <div>{ expenseDate.toLocaleDateString() }</div>
            <div className="expense-item__description">
                <h2>{ expenseTitle }</h2>
                <div className="expense-item__price">{ expenseAmount.toFixed(2) }€</div>
            </div>
        </div>
    )
}

export default ExpenseItem;