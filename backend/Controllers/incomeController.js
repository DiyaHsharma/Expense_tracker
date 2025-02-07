const Income = require("../Models/incomeModel");

// Get all incomes
const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.status(200).json({ success: true, incomes }); // Ensure incomes is always an array
    } catch (error) {
        res.status(500).json({ success: false, incomes: [], error: "Server error" });
    }
};


// Add a new income
const addIncome = async (req, res) => {
    const { title, amount, date, description } = req.body;

    try {
        const income = new Income({ title, amount, date, description });
        await income.save();

        res.status(201).json({ success: true, message: "Income added successfully", income });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to add income" });
    }
};

module.exports = { getIncomes, addIncome };
