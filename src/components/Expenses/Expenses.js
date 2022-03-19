import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

/**
 * Version 1 (Naive)
 */
// const Expenses = (props) => {
//     return (
//         <div>
//             <ExpenseItem
//                 title={props.expenses[0].title}
//                 amount={props.expenses[0].amount}
//                 date={props.expenses[0].date}
//             />
//             <ExpenseItem
//                 title={props.expenses[1].title}
//                 amount={props.expenses[1].amount}
//                 date={props.expenses[1].date}
//             />
//             <ExpenseItem
//                 title={props.expenses[2].title}
//                 amount={props.expenses[2].amount}
//                 date={props.expenses[2].date}
//             />
//         </div>
//     );
// }

/**
 * Version 2 (Elaborate)
 */
const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState("2020");

    const handleSelectedDate = (changedDate) => {
        setFilterDate(changedDate);
    }

    const displayedExpenses = props.expenses.filter(expense => 
        expense.date.getFullYear().toString() === filterDate
    );

    let expenseContent = <p>Pas de dépenses !</p>;

    if(displayedExpenses.length > 0) {
        expenseContent = displayedExpenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />)
    )
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter 
                initSelected={filterDate} 
                onSelectedDate={handleSelectedDate}
            />
            {expenseContent}
            {/* {displayedExpenses.length === 0 && <p>Pas de dépenses !</p> }
            {displayedExpenses.length > 0 && displayedExpenses.map((expense) => 
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            } */}
        </Card>
    );
}

export default Expenses;