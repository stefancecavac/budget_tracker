import mongoose from 'mongoose'
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    amount: {
        type: Number,
        required:true

    },

})

export default mongoose.model('Expense', expenseSchema)