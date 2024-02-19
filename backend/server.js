import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose";

import budgetRouter from './routes/budgetRouter.js'
import userRouter from './routes/userRouter.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/budgets' ,budgetRouter )
app.use('/api/user',userRouter)





mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT , () => {
            console.log(`database connected and app listening on port${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })