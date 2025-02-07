const express = require("express");
const router = express.Router();

const { getExpenses, addExpense,deleteExpense } = require("../Controllers/expenseController");

router.get("/", getExpenses);
router.post("/", addExpense);
router.delete("/expenses/:id", deleteExpense);

module.exports = router;
