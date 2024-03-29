import express from "express";
import { getAllBudgets, getSingleBudget,createBudget,deleteBudget } from "../controllers/budgetController.js";
import { addExpense ,deleteExpense } from "../controllers/expenseController.js";

import authenticate from "../middleware/authentication.js";

const router = express.Router()

router.use(authenticate)
router.get('/', getAllBudgets)
router.get('/:id', getSingleBudget)

router.post('/', createBudget)

router.delete('/:id/delete-expenses/:eId',deleteExpense)
router.post('/:id/add-expenses',addExpense)
router.delete('/:id', deleteBudget)


export default router