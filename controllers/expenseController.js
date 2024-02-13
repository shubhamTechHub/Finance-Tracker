const asyncHandler = require("express-async-handler");
const Expense = require("../models/expenseModel");

// @desc Get All Expenses
// @route GET /api/finance-tracker/expense
// @access private

const getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find({ user_id: req.user.id });
  res.status(200).json(expenses);
});

// @desc Create new Expense
// @route POST /api/finance-tracker/expense
// @access private

const createExpense = asyncHandler(async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  if (!title || !amount || !category || !description || !date) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const newExpense = await Expense.create({
    title,
    amount,
    category,
    description,
    date,
    user_id: req.user.id,
  });

  res.status(201).json(newExpense);
});

// @desc Delete Expense
// @route DELETE /api/finance-tracker/expense/:id
// @access private

const deleteExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const expense = await Expense.findById(id);

  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }

  if (expense.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to delete other user transactions"
    );
  }

  const deletedExpense = await Expense.findByIdAndDelete(id);
  res.status(200).json(deletedExpense);
});

module.exports = { getExpenses, createExpense, deleteExpense };
