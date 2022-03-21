import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle ] = useState('');
    // const [enteredAmount, setEnteredAmount ] = useState('');
    // const [enteredDate, setEnteredDate ] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const handleTitleChange = (e) => {
        // setEnteredTitle(e.target.value);

        // First Approach 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });

        // Second Approach (better)
        setUserInput((prevStates) => {
            return {
                ...prevStates,
                enteredTitle: e.target.value
            }
        });
    }
    const handleAmountChange = (e) => {
        // setEnteredAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // });

        setUserInput((prevStates) => {
            return {
                ...prevStates,
                enteredAmount: e.target.value
            }
        });
    }
    const handleDateChange = (e) => {
        // setEnteredDate(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // });

        setUserInput((prevStates) => {
            return {
                ...prevStates,
                enteredDate: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: parseFloat(userInput.enteredAmount),
            date: new Date(userInput.enteredDate)
        }
        console.log(expenseData);
        props.onSaveNewExpense(expenseData);
        resetForm();
    }

    const resetForm = () => {
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={handleAmountChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date"
                        min="2022-01-01"
                        max="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                {/* <button onClick={props.onCancel}>Annuler</button>
                <button action="submit">Enregistrer</button> */}
                <button type="button" onClick={props.onCancel}>Annuler</button>
                <button type="submit">Enregistrer</button>
            </div>
        </form>
    )

}

export default ExpenseForm;