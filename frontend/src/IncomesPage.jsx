import React, { useState, useEffect } from "react";
import axios from "axios";

function Incomes() {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
        description: "",
    });

    const [incomes, setIncomes] = useState([]); // To store the list of incomes
    const [error, setError] = useState(""); // To handle errors
    const [success, setSuccess] = useState(""); // To handle success messages

    // Fetch all incomes on component mount
    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/incomes");
                setIncomes(res.data);
            } catch (err) {
                console.error("Error fetching incomes:", err);
            }
        };

        fetchIncomes();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/incomes", formData);
            setSuccess(res.data.message);
            setFormData({
                title: "",
                amount: "",
                date: "",
                description: "",
            });
            // Refresh incomes list
            const updatedIncomes = await axios.get("http://localhost:5000/api/incomes");
            setIncomes(updatedIncomes.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error adding income");
        }
    };

    return (
        <>
            <div className="col-span-6 p-4 pt-0 flex flex-col gap-4" id="income">
                <h1 className="text-4xl p-4 bg-slate-600 text-orange-400 text-center rounded-lg">Total Income:</h1>

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
                        placeholder="Salary Amount"
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
                        Add Income
                    </button>
                </form>

                <div className="mt-8">
                    <h2 className="text-2xl text-orange-400 mb-4">Income List:</h2>
                    <ul className="bg-slate-800 text-orange-200 p-4 rounded-md">
                        {incomes.map((income) => (
                            <li key={income._id} className="mb-2">
                                <strong>{income.title}</strong>: ₹ {income.amount} on {new Date(income.date).toLocaleDateString()}<br />
                                {income.description && <span>Description: {income.description}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Incomes;
