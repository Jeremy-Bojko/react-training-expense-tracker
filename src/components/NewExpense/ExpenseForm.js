import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle ] = useState('');
    const [enteredAmount, setEnteredAmount ] = useState('');
    const [enteredDate, setEnteredDate ] = useState('');

    const handleTitleChange = (e) => {
        setEnteredTitle(e.target.value);
    }
    const handleAmountChange = (e) => {
        setEnteredAmount(e.target.value);
    }
    const handleDateChange = (e) => {
        setEnteredDate(e.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                            onChange={handleTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" 
                            min="0.01" 
                            step="0.01" 
                            onChange={handleAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" 
                            min="2022-01-01" 
                            max="2022-12-31" 
                            onChange={handleDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button action="submit">Enregistrer</button>
            </div>
        </form>
    )

}

export default ExpenseForm;