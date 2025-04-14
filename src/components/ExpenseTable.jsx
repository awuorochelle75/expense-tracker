import React from 'react';

function ExpenseTable({ expenses }) {
  if (expenses.length === 0) return null;

  return (
    <div className="mt-10 ml-10 mr-10 overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-xl">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Description</th>
            <th className="text-left py-3 px-4">Category</th>
            <th className="text-left py-3 px-4">Amount</th>
            <th className="text-left py-3 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{expense.name}</td>
              <td className="py-2 px-4">{expense.description}</td>
              <td className="py-2 px-4">{expense.category}</td>
              <td className="py-2 px-4">Ksh {expense.amount}</td>
              <td className="py-2 px-4">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;


