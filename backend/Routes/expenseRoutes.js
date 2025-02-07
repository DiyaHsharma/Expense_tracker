const express = require("express");
const router = express.Router();
const { getExpenses, addExpense } = require("../Controllers/expenseController");

router.get("/", getExpenses);
router.post("/", addExpense);

module.exports = router;
