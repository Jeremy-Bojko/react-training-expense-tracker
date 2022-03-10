import React, { useState } from "react";

import './ExpensesFilter.css'; 

const ExpensesFilter = (props) => {
    const [selectedDate, setSelectedDate] = useState(props.initSelected);
    
    const handleChangeDate = (e) => {
        setSelectedDate(e.target.value);
        props.onSelectedDate(e.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filtrer par année</label>
                <select value={selectedDate} onChange={handleChangeDate}>
                    <option value="2019" key="0">2019</option>
                    <option value="2020" key="1">2020</option>
                    <option value="2021" key="2">2021</option>
                    <option value="2022" key="3">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;