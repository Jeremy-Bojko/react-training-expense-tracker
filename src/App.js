import Expenses from "./components/Expenses/Expenses";

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
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
