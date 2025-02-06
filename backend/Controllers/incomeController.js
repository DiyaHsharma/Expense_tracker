const Income = require("../Models/incomeModel");

// Add a new income
exports.addIncome = async (req, res) => {
    try {
        const { title, amount, date, description } = req.body;
        const newIncome = new Income({ title, amount, date, description });
        await newIncome.save();
        res.status(201).json({ message: "Income added successfully", income: newIncome });
    } catch (error) {
        res.status(500).json({ error: "Error adding income" });
    }
};

// Get all incomes
exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ error: "Error fetching incomes" });
    }
};