import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
    const token = req.cookies.token

    try {


        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No token provided' })
        }

        const decodedToken = jwt.verify(token, process.env.SECRET)
        console.log(decodedToken)
        if (!decodedToken) {
            return res.status(401).json({ message: 'not valid token' })
        }

        req.user = decodedToken
        next()
    }
    catch(error){
        res.status(401).json({message: 'not authorized'})
    }
} 
export default authenticate