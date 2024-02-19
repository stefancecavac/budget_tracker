import express from "express";
import { getAllBudgets, getSingleBudget,createBudget,deleteBudget } from "../controllers/budgetController.js";
import { addExpense } from "../controllers/expenseController.js";

import authenticate from "../middleware/authentication.js";

const router = express.Router()

//router.use(authenticate)
router.get('/', getAllBudgets)
router.get('/:id', getSingleBudget)

router.post('/', createBudget)

router.post('/:id/expenses',addExpense)
router.delete('/:id', deleteBudget)


export default router