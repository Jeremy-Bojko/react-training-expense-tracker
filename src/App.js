import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expensesData = [
    {
      id: 'e1',
      title: 'Fruits et légumes 🥦 🍊',
      amount: 10.50,
      date: new Date(2021, 2, 8)
    },
    {
      id: 'e2',
      title: 'Courses 🛒',
      amount: 81.32,
      date: new Date(2020, 1, 24)
    },
    {
      id: 'e3',
      title: 'Achat vétement sport ⛹️',
      amount: 33.75,
      date: new Date(2022, 0, 18)
    },
    {
      id: 'e4',
      title: 'Repas midi ',
      amount: 12.75,
      date: new Date(2022, 0, 9)
    },
  ];

  const [expenses, setExpenses ] = useState(expensesData);

  const handleNewExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    console.log(expenses);
  }
  
  return (
    <div>
      <NewExpense onEmitNewExpense={handleNewExpense}/>
      <Expenses 
        expenses={expenses} 
      />
    </div>
  );
}

export default App;
