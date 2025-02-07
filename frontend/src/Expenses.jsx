import React, { useState, useEffect } from "react";
import axios from "axios";

function Expenses() {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
        description: "",
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [expenses, setExpenses] = useState([]); // Initialize expenses as an empty array
    const [incomes, setIncomes] = useState([]); // Initialize incomes as an empty array

    // Fetch incomes and expenses from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const incomeRes = await axios.get("http://localhost:5000/api/incomes");
                setIncomes(incomeRes.data.incomes || []);

                const expenseRes = await axios.get("http://localhost:5000/api/expenses");
                setExpenses(expenseRes.data.expenses || []);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        // Check if the salary title exists in incomes
        const salaryTitleExists = incomes.some((income) => income.title === formData.title);

        if (!salaryTitleExists) {
            setError("You can only add an expense for an existing income salary title.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/expenses", formData);
            setSuccess(res.data.message);
            setExpenses((prevExpenses) => [...prevExpenses, res.data.expense]); // Add the new expense to the list
            setFormData({
                title: "",
                amount: "",
                date: "",
                description: "",
            });
        } catch (error) {
            setError(
                error.response?.data?.error || "Failed to add expense. Please try again."
            );
        }
    };

    return (
        <div className="col-span-6 p-4 pt-0 flex flex-col gap-4" id="income">
            <h1 className="text-4xl p-4 bg-slate-600 text-orange-400 text-center rounded-lg">Expenses:</h1>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form className="flex flex-col w-1/3 gap-5 text-orange-400" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Salary Title"
                    className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Expense Amount"
                    className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    placeholder="Enter A Date"
                    className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <textarea
                    placeholder="Add a Reference"
                    className="border-blue-900 border-2 rounded-sm p-1 w-full focus:outline-none"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <button
                    className="text-lg font-semibold bg-purple-500 rounded-xl w-3/5 py-1 
                    hover:shadow-emerald-500 shadow-md text-black"
                    type="submit"
                >
                    Add Expense
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-2xl text-orange-400 mb-4">Expense List:</h2>
                <ul className="bg-slate-800 text-orange-200 p-4 rounded-md">
                    {expenses.length > 0 ? (
                        expenses.map((expense) => (
                            <li key={expense._id} className="mb-2">
                                <strong>{expense.title}</strong>: ₹ {expense.amount} on {new Date(expense.date).toLocaleDateString()}<br />
                                {expense.description && <span>Description: {expense.description}</span>}
                            </li>
                        ))
                    ) : (
                        <p>No expense records found.</p>
                    )}
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl text-orange-400 mb-4">Income List:</h2>
                <ul className="bg-slate-800 text-orange-200 p-4 rounded-md">
                    {incomes.length > 0 ? (
                        incomes.map((income) => (
                            <li key={income._id} className="mb-2">
                                <strong>{income.title}</strong>: ₹ {income.amount} on {new Date(income.date).toLocaleDateString()}
                            </li>
                        ))
                    ) : (
                        <p>No income records found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Expenses;
