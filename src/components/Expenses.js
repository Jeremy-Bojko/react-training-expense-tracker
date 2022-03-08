import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

/**
 * Version 1 (Naive)
 */
// function Expenses(props) {
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
function Expenses(props) {
    const listExpense = props.expenses.map((expense) => {
       return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    })
    return (
        <div className='expenses'>{listExpense}</div>
    );
}

export default Expenses;