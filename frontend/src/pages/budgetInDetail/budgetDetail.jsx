import { useEffect } from "react"
import { UseBudgetContext } from "../../hooks/useBudgetHook"
import { useParams } from 'react-router-dom'

import ExpenceCard from "../../components/expenses/expenseCard"


const BudgetDetail = () => {
    const { singleBudget, dispatch } = UseBudgetContext()
    const { budgetId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/budgets/${budgetId}` ,{
                    credentials: 'include',
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_BUDGET', payload: json })
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [dispatch, budgetId])


    return (
        singleBudget && (
            <div className='m-5  md:mx-64'>
                <div className=' bg-gray-200 shadow rounded p-3 flex flex-col mb-3'>
                    <h1 className="text-6xl text-teal-500 font-bold">{singleBudget.title}</h1>
                    <p>{singleBudget.budget}</p>
                </div>

                <h2 className="text-gray-500 text-4xl font-bold mb-6">Expences:</h2>

                {singleBudget.expenses && singleBudget.expenses.map((expence) => (
                    <ExpenceCard key={expence._id} expence={expence}></ExpenceCard>

                ))}
            </div>

        )
    )
}

export default BudgetDetail