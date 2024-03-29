import {   useParams } from "react-router-dom"
import { UseBudgetContext } from "../../hooks/useBudgetHook"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExpenceCard = ({ expence }) => {
    const { dispatch } = UseBudgetContext()
    const {budgetId} = useParams()
    
  
   const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/budgets/${budgetId}/delete-expenses/${expence._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if(!response.ok){
                toast.error("Fill out all fields")

            }
    
            if (response.ok) {
                const json = await response.json();
                dispatch({ type: 'DELETE_EXPENSE', payload: json });
                toast.success("Expense removed")

               
            } else {
              
                console.error('Error deleting expense:', response.status);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex border-2 justify-between border-dashed border-teal-500  bg-gray-200 mb-3 p-3 shadow rounded-full items-center">
            <h2 className="text-3xl text-teal-500">{expence.name}</h2>
            <p className="text-teal-500 font-bold"> {'$' + expence.amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            <button className="p-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-500" onClick={handleDelete}>delete</button>
        </div>
    )
}

export default ExpenceCard