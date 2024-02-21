import { useEffect, useState } from "react"
import { UseBudgetContext } from "../../hooks/useBudgetHook"
import {  useNavigate, useParams } from 'react-router-dom'

import ExpenceCard from "../../components/expenses/expenseCard"



const BudgetDetail = () => {
    const { singleBudget, dispatch,expenses } = UseBudgetContext()
    const { budgetId } = useParams()
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await fetch(`http://localhost:4000/api/budgets/${budgetId}`, {
                    credentials: 'include',
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_BUDGET', payload: json })
                    setLoading(false)
                   
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch,budgetId ,expenses])

  

    const handleDelete = async() =>{
        try {
            const response = await fetch(`http://localhost:4000/api/budgets/${budgetId}`, {
                credentials: 'include',
                method:'DELETE'
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'DELETE_BUDGET', payload: json })
                navigate('/')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const totalExpenses = singleBudget.expenses ? singleBudget.expenses.reduce((acc, expense) => acc + expense.amount, 0) : 0;    
    
    return (

        loading ? (
            <p>...loading</p>
        ) :  ( singleBudget && (
            <>

            <div className='m-5 relative  md:mx-14 bg-gray-200 shadow rounded'>
                <div className='  p-3 flex mb-8 justify-between items-center'>
                    <h1 className="md:text-6xl text-teal-500 font-bold">{singleBudget.title}</h1>
                <button className="p-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-500" onClick={handleDelete}>delete</button>

                    <p className="text-teal-500 md:text-2xl font-bold">
                        {'$' + singleBudget.budget.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                </div>
                <progress className=" mx-2 md:ml-10 md:mr-10 mb-8 [&::-webkit-progress-bar]:rounded-lg w-11/12 h-5 [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-gray-300
             [&::-webkit-progress-value]:bg-teal-400 [&::-moz-progress-bar]:bg-violet-400" max={singleBudget.budget} value={totalExpenses}></progress>

            </div>

                <h2 className="text-gray-500 text-4xl font-bold mb-6 flex justify-center">Expences:</h2>
            <div className="mx-5 md:mx-32">
                {singleBudget.expenses && singleBudget.expenses.map((expence) => (
                    <ExpenceCard key={expence._id} expence={expence}></ExpenceCard>

                ))}
            </div>
            </>)
       
        )
    )
}

export default BudgetDetail