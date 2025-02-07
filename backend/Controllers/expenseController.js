const Expense = require("../Models/expenseModel");
const Income = require("../Models/incomeModel");

// Get all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json({ success: true, expenses });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Add expense only if matching income title exists
const addExpense = async (req, res) => {
    const { title, amount, date, description } = req.body;

    try {
        // Check if an income with the same title exists
        const matchingIncome = await Income.findOne({ title });

        if (!matchingIncome) {
            return res.status(400).json({ success: false, error: "No matching income found for this expense title" });
        }

        // Save the expense
        const expense = new Expense({ title, amount, date, description });
        await expense.save();

        res.status(201).json({ success: true, message: "Expense added successfully", expense });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to add expense" });
    }
};

module.exports = { getExpenses, addExpense };
