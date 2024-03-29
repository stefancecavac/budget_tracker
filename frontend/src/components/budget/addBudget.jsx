import { useState } from "react"
import { UseBudgetContext } from "../../hooks/useBudgetHook"

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddBudget = () => {
    const { dispatch } = UseBudgetContext()

    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:4000/api/budgets`, {
                method: 'POST',
                body: JSON.stringify({ title, budget }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',

            })
            const json = await response.json()
            if(!response.ok){
                toast.error("Fill out all fields")

            }
            if (response.ok) {
                setTitle('')
                setBudget('')
                dispatch({ type: 'POST_BUDGET', payload: json })
                toast.success("Budget added")

            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <div className='bg-gray-100 rounded shadow p-2'>

         

            <form onSubmit={handleSubmit} className="border-2 border-dashed border-teal-500 rounded p-2 flex flex-col">
                <h2 className='text-gray-500 text-2xl font-bold mb-2'>Create new budget</h2>
                <label className='text-gray-500 mb-1'>Budget name:</label>
                <input onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='border-2 border-teal-500 rounded p-1 mb-1'></input>

                <label className='text-gray-500 mb-1'>Budget amount:</label>

                <input type="number" min="0" step='.01' onChange={(e) => setBudget(e.target.value)}
                    value={budget}
                    className='border-2 border-teal-500 rounded p-1 mb-5'></input>

                <button className='bg-teal-500 rounded border-2 text-white p-1 flex w-2/6 justify-center hover:bg-white hover:text-teal-500 hover:border-2 border-teal-500'>Create Budget</button>
            </form>
        </div>
    )
}

export default AddBudget