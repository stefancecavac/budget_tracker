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
    expenses:[{
        type:mongoose.Types.ObjectId,
        ref:'Expense'
    } ],
    user_id:{
        type:String,
        required:true
    }

} ,{timestamps:true})

export default mongoose.model("Budget", budgetModel)