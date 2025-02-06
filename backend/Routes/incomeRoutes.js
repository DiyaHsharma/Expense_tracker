const express = require("express");
const { addIncome, getIncomes } = require("../Controllers/incomeController");

const router = express.Router();

// POST /api/incomes - Add a new income
router.post("/", addIncome);

// GET /api/incomes - Get all incomes
router.get("/", getIncomes);

module.exports = router;
