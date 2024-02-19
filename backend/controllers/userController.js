import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


const registerUSer = async (req, res) => {
    const { name, lastName, email, password } = req.body

    try {
        if (!name || !lastName || !email || !password) {
            return res.status(400).json({ error: 'please fill out all fields' })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'not a valid email' })
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: 'not a strong passwor, please use combination of upper case letters with numbers and symbols' })
        }
        const emailExist = await User.findOne({email})
        if(emailExist){
            return res.status(400).json({ error: 'email already in use' }) 
        }
        
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        const user = await User.create({name , lastName , email , password:hash})

        res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const loginUser = async (req, res) => {
    const {email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'please fill out all fields' })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error:'wrong email'})
        }

        const compare = await bcrypt.compare(password, user.password)
        if(!compare){
            return res.status(400).json({error:'wrong password'})
        }
        
        const token = jwt.sign({id: user.id}, process.env.SECRET ,{expiresIn:'3h'})

        res.cookie('token' ,token, { httpOnly: true })
        res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export  {loginUser, registerUSer}