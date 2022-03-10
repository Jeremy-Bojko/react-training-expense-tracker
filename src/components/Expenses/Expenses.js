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
    const [filterDate, setFilterDate] = useState(2020);

    const renderListExpense = () => {
        const displayedExpenses = props.expenses.filter(expense => expense.date.getFullYear() === filterDate);

        return displayedExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            );
        });
    };

    const handleSelectedDate = (changedDate) => {
        console.log(changedDate);
        setFilterDate(changedDate);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter initSelected={filterDate} onSelectedDate={handleSelectedDate}/>
            {renderListExpense()}
        </Card>
    );
}

export default Expenses;