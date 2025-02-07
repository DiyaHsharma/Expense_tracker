const express = require("express");
const router = express.Router();
const { getIncomes, addIncome } = require("../Controllers/incomeController");

router.get("/", getIncomes);
router.post("/", addIncome);

module.exports = router;
