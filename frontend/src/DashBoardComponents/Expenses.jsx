import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiMessage3Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

function Expenses() {

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
        description: "",
    });

    const successNotify = () => {
        toast.success("Income added successfully", {
            position: "top-right",
            autoClose: 2000, // Duration in ms
            hideProgressBar: false, // Show the progress bar
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

            className: "bg-emerald-300 text-white shadow-md rounded-lg",
            progressClassName: "bg-green-700",
        });
    };

    const errorNotify = () => {
        toast.error("Error Occured!", {
            position: "top-left",
            autoClose: 2000,
        });
    };

    const [expenses, setExpenses] = useState([]);
    

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/expenses");
                setExpenses(res.data.expenses || []);
                
            } catch (err) {
                console.error("Error fetching expenses:", err);
                setExpenses([]);
            }
        };
        fetchExpenses();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/expenses", formData);
            setFormData({ title: "", amount: "", date: "", description: "" });
            successNotify();

            const updatedExpenses = await axios.get("http://localhost:5000/api/expenses");
            setExpenses(updatedExpenses.data.expenses || []);
            
        } catch (err) {
            errorNotify();
            
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/expenses/${id}`);

            const updatedExpenses = await axios.get("http://localhost:5000/api/expenses");
            setExpenses(updatedExpenses.data.expenses || []);
            
            // setExpenses(expenses.filter(expense => expense._id !== id));
        } catch (err) {
            errorNotify();
            
        }
    };


    return (
        <>
            <div className="col-span-6 p-4 pt-0 flex flex-col gap-4" id="expense">
                <h1 className="text-4xl p-4 bg-slate-600 text-orange-400 text-center rounded-lg">Total Expenses: ₹</h1>
                <div className="flex gap-4">
                    <form className="flex flex-col w-1/2 gap-5 text-orange-400" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Expense Title"
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
                    {expenses.length === 0 && <div className="flex text-red-600 w-full justify-center items-center text-2xl font-semibold">No Expenses Added Yet</div>}
                    {expenses.length !== 0 && <div className="w-full h-[75vh] overflow-y-auto rounded-lg">
                        {expenses.map((expense) => (
                            <div className="flex justify-between p-4 mb-2 bg-slate-600 text-orange-400 rounded-lg" key={expense._id}>
                                <div>
                                    <div className="text-2xl">{expense.title}</div>
                                    <div className="flex gap-4">
                                        <span>₹ {expense.amount}</span>
                                        <span>{new Date(expense.date).toLocaleDateString()}</span>
                                        {expense.description && <span className="flex gap-2"><RiMessage3Line className="self-center" />{expense.description}</span>}
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(expense._id)}>
                                    <MdDelete className="text-3xl self-center hover:shadow-emerald-500 shadow-md rounded-full" />
                                </button>
                            </div>
                        ))}
                    </div>}
                    <ToastContainer/>
                </div>
            </div>
        </>
    );
}

export default Expenses;
