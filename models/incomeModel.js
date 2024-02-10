const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add the title"],
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: [true, "Please enter the amount"],
      trim: true,
      maxLength: 20,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: [true, "Please enter the date"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please enter the category"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter the description"],
      maxLength: 50,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
