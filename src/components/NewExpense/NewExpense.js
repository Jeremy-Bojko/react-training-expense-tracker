import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const handleSaveNewExpense = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onEmitNewExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveNewExpense={handleSaveNewExpense}/>
        </div>
    )
}

export default NewExpense;