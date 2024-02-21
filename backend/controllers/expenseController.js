import Budget from '../models/budgetModel.js'
import Expense from '../models/expenseModel.js'

const addExpense = async (req, res) => {
    const { name, amount } = req.body;
    const { id } = req.params;
    const user_id = req.user.id
    try {
        const expense = await Expense.create({ name, amount, user_id });

 
        const updatedBudget = await Budget.findByIdAndUpdate(
            {_id:id},
            { $push: { expenses: expense } },
            { new: true }
        ).populate('expenses')

     
        res.status(201).json(updatedBudget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const deleteExpense = async (req, res) => {
    const { id, eId } = req.params;

    try {
        const expense = await Expense.findOneAndDelete({ _id: eId });
       
        const updatedBudget = await Budget.findByIdAndUpdate(
            { _id: id },
            { $pull: { expenses: { _id: expense._id } } },
            { new: true }
        ).populate('expenses');

        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export {addExpense ,deleteExpense}