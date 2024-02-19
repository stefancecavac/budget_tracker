import express from "express";
import { getAllBudgets, getSingleBudget,createBudget,deleteBudget } from "../controllers/budgetController.js";

const router = express.Router()


router.get('/', getAllBudgets)
router.get('/:id', getSingleBudget)
router.post('/', createBudget)
router.delete('/:id', deleteBudget)


export default router