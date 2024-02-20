import {loginUser , registerUSer , logoutUser} from '../controllers/userController.js'
import express from 'express'

const router = express.Router()


router.post('/login' ,loginUser )
router.post('/register' ,registerUSer )
router.post('/logout',logoutUser)

export default router
