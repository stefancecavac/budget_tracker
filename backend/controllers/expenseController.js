import Budget from '../models/budgetModel.js'

const addExpense = async(req, res) => { 
    const {id} = req.params

    try{
        const budget = await Budget.findById(id)

        if (!budget) {
            return res.status(404).json({ error: 'Budget not found' });
        }

        const {name , amount} = req.body

        budget.expenses.push({name , amount})
        await budget.save();

        res.status(201).json(budget);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export {addExpense}