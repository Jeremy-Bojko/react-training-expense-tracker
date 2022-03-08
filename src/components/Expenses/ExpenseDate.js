import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const day = props.date.toLocaleDateString('fr-FR', { day: 'numeric' });
    const month = props.date.toLocaleDateString('fr-FR', { month: 'long' });
    const year = props.date.getFullYear();
    return(
        <div className='expense-date'>
            <div className='expense-date__day'>{ day }</div>
            <div className='expense-date__year'>{ year }</div>
            <div className='expense-date__month'>{ month }</div>
        </div>
    );
}

export default ExpenseDate;