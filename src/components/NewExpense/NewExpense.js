import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveNewExpense = (newExpense) => {
        alert('coucou')
        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onEmitNewExpense(expenseData);
        handleStopEditing();
    }

    const handleStartEditing = () => {
        setIsEditing(true);
    }

    const handleStopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            { isEditing ? (
                <ExpenseForm 
                    onSaveNewExpense={handleSaveNewExpense}
                    onCancel={handleStopEditing}
                />
                ) : <button onClick={handleStartEditing}>Ajout une dépense</button>
            }
            
        </div>
    )
}

export default NewExpense;