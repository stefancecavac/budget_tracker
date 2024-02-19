import { useState } from "react"
import { UseBudgetContext } from "../../hooks/useBudgetHook"

const AddExpense = () => {
    const { budgets, dispatch } = UseBudgetContext()
    const [selectedBudget, setSelectedBudget] = useState('')
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:4000/api/budgets/${selectedBudget}/expenses`, {
                method: 'PUT',
                body: JSON.stringify({ name, amount }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'PUT_BUDGET', payload: json })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bg-gray-100 rounded shadow p-2'>
            <form onSubmit={handleSubmit} className="border-2 border-dashed border-teal-500 rounded p-2 flex flex-col">
                <h2 className='text-gray-500 text-2xl font-bold mb-2'>Add new expense</h2>

                <label className='text-gray-500 mb-1'>Budget:</label>
                <select className="border-2 border-teal-500 rounded p-1 mb-1"
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                >
                    <option value="">Select Budget</option>
                    {budgets && budgets.map((budget) => (
                        <option key={budget._id} value={budget._id}>
                            {budget.title}
                        </option>
                    ))}
                </select>

                <div className='flex items-center justify-between'>
                    <label className='text-gray-500 mb-1'>Expense name:</label>
                    <label className='text-gray-500 mb-1'>Expense amount:</label>
                </div>
                <div className='flex items-center justify-between mb-5'>

                    <input onChange={(e) => setName(e.target.value)}
                        value={name}
                        className='border-2 border-teal-500 rounded p-1 w-auto'></input>

                    <input type="number" min="0" step='.01' onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        className='border-2 border-teal-500 rounded p-1  w-32 '></input>
                </div>


                <button className='bg-teal-500 rounded border-2 text-white p-1 flex w-2/6 justify-center hover:bg-white hover:text-teal-500 hover:border-2 border-teal-500'>Add Expense</button>
            </form>
        </div>)
}

export default AddExpense