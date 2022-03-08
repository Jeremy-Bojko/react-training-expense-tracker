import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>8 mars 2022</div>
            <div className="expense-item__description">
                <h2>Achat fruits et légumes 🥦 🍊</h2>
                <div className="expense-item__price">10,50€</div>
            </div>
        </div>
    )
}

export default ExpenseItem;