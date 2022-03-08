import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Fruits et légumes 🥦 🍊',
      amount: 10.50,
      date: new Date(2022, 2, 8)
    },
    {
      id: 'e2',
      title: 'Courses 🛒',
      amount: 81.32,
      date: new Date(2022, 1, 24)
    },
    {
      id: 'e3',
      title: 'Achat vétement sport ⛹️',
      amount: 33.75,
      date: new Date(2022, 0, 18)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
