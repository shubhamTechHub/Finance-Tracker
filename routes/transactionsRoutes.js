const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");

const {
  createIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/incomeController");

const {
  createExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.use(validateToken);

router.route("/income").post(createIncome).get(getIncomes);
router.route("/income/:id").delete(deleteIncome);

router.route("/expense").post(createExpense).get(getExpenses);
router.route("/expense/:id").delete(deleteExpense);

module.exports = router;
