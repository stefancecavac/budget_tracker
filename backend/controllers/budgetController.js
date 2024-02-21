import Budget from "../models/budgetModel.js";
import mongoose from "mongoose";


const getAllBudgets = async(req, res) => {

    try{
        const user_id = req.user.id
        const budget = await Budget.find({user_id}).populate('expenses').sort({createdAt:-1})
        res.status(200).json(budget)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getSingleBudget = async(req, res) => {
    const {id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error: 'not a valid id'})
        }
        
        const budget = await Budget.findOne({_id : id}).populate('expenses')

        if(!budget){
            return res.status(404).json({error: 'budget with that id not found'})

        }
        res.status(200).json(budget)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const createBudget = async(req, res) => {
    const {title , budget } = req.body
    const user_id = req.user.id
    
    try{
        const budgets = await Budget.create({user_id , title , budget})
        res.status(200).json(budgets)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteBudget = async(req, res) => {
   const {id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error: 'not a valid id'})
        }
        
        const budget = await Budget.findOneAndDelete({_id : id})

        if(!budget){
            return res.status(404).json({error: 'budget with that id not found'})

        }
        res.status(200).json(budget)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export {getAllBudgets, getSingleBudget,createBudget,deleteBudget}