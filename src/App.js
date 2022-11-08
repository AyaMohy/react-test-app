import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "a1",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 234.56,
    },
    {
      id: "a1",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 234.56,
    },
    {
      id: "a1",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 234.56,
    },
    {
      id: "a1",
      title: "Car Insurance",
      date: new Date(2022, 2, 28),
      amount: 234.56,
    },
  ];
  return (
    <div className="App">
      {expense.map((data, index) => (
        <ExpenseItem
          key={index}
          date={data.date}
          amount={data.amount}
          title={data.title}
        />
      ))}
    </div>
  );
}

export default App;
