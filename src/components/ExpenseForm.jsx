import React, {useState} from "react";

function ExpenseForm({ onAddExpense }){
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        amount: '',
        date: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Expense:', formData);
        onAddExpense(formData);
        setFormData({
            name: '',
            description: '',
            category: '',
            amount: '',
            date: '',
          });
      };
    
      return (
        <div className="max-w-xl ml-5 mt-10 p-6 bg-white shadow-xl rounded-2xl">
          <h1 className="text-2xl font-bold mb-2 ">Add Expense</h1>
          <p className="text-gray-600  mb-6">Enter your expense details below</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter expense name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
            
            <input
              type="text"
              name="description"
              placeholder="Enter expense description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
    
            <input
              type="text"
              name="category"
              placeholder="Enter expense Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
    
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
    
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
    
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      );
    };
    
    export default ExpenseForm;