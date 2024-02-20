
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { UseUserContext } from "../../hooks/useUserHook"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState(null)

    const { dispatch } = UseUserContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            const response = await fetch(`http://localhost:4000/api/user/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            const json = await response.json()

            if(!response.ok){
                setError(json.error)
            }
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json))

                dispatch({ type: 'LOGIN', payload: json })
                navigate('/')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="md:flex justify-evenly gap-11 mx-10 md:mx-40 ">
            <div className=" mt-24">
                <h1 className=" text-center md:text-right text-3xl md:text-7xl text-gray-500 font-bold">Best <p className="text-teal-500">Budget Tracking app</p> in the wooorld!!!</h1>
            </div>

            <form className=" flex flex-col md:border-l-4 md:border-teal-500 h-56  pl-4 mt-10 md:mt-40 md:mr-72 "
                onSubmit={handleSubmit}>
                <h1 className="text-3xl text-gray-500 font-bold pb-6">Login:</h1>

                <label className="text-gray-500 mb-4">Email:</label>
                <input className="border-b-2 border-teal-500 mb-4 focus:outline-none"
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="e.g..someone@example.com"></input>

                <label className="text-gray-500 mb-4">Password:</label>
                <input className="border-b-2 border-teal-500 mb-4 focus:outline-none"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="e.g..asdASD123!"></input>

                <button className="bg-teal-500 rounded-full w-16 p-1 border-2 border-teal-500 text-white hover:bg-white hover:border hover:text-teal-500">Login</button>
           <p>Dont have account? Register <Link to='/register' className="text-teal-500">here</Link></p>
            {error && <div className="bg-red-300 border-2 border-red-500 text-red-500 rounded-full p-1 mt-5">{error}</div>}
            </form>
        </div>
    )
}

export default Login