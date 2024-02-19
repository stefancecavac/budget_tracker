import {loginUser , registerUSer} from '../controllers/userController.js'
import express from 'express'

const router = express.Router()


router.post('/login' ,loginUser )
router.post('/register' ,registerUSer )

export default router
