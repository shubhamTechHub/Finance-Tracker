const asyncHandler = require("express-async-handler");
const Income = require("../models/incomeModel");

// @desc Get All Incomes
// @route GET /api/finance-tracker/income
// @access public

const getIncomes = asyncHandler(async (req, res) => {
  const incomes = await Income.find({});
  res.status(200).json(incomes);
});

// @desc Create new income
// @route POST /api/finance-tracker/income
// @access public

const createIncome = asyncHandler(async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  if (!title || !amount || !category || !description || !date) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const newIncome = await Income.create({
    title,
    amount,
    category,
    description,
    date,
  });

  res.status(201).json(newIncome);
});

// @desc Delete Income
// @route DELETE /api/finance-tracker/income/:id
// @access public

const deleteIncome = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const income = await Income.findById(id);

  if (!income) {
    res.status(404);
    throw new Error("Income not found");
  }

  const deletedIncome = await Income.findByIdAndDelete(id);
  res.status(200).json(deletedIncome);
});

module.exports = { getIncomes, createIncome, deleteIncome };
