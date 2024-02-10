const express = require("express");
const {
  createIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/incomeController");
const router = express.Router();

router.route("/income").post(createIncome).get(getIncomes);
router.route("/income/:id").delete(deleteIncome);

module.exports = router;
