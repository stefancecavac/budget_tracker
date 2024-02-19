import mongoose from "mongoose";

const Schema = mongoose.Schema



const budgetModel = new Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    expenses: [
        {
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
        }
    ]

})

export default mongoose.model("Budget", budgetModel)