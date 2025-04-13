import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';



function App(){
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1><b>Expense Tracker</b></h1>
      <p>Start taking control of your finances and life.Record,categorize and analyze your spending</p>
      
        <ExpenseForm onAddExpense={addExpense}/>
      
      
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      
      <ExpenseTable expenses={filteredExpenses} />
      
    </div>
   
   
  );
}

export default App;
