import mongoose from "mongoose";

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
});

const budgetModel = new Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    expenses: [expenseSchema]
})

export default mongoose.model("Budget", budgetModel)