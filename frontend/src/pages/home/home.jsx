import AddBudget from "../../components/budget/addBudget"
import FetchBudget from "../../components/budget/fetchBudget"
import AddExpense from "../../components/expenses/addExpense"
import { UseBudgetContext } from "../../hooks/useBudgetHook"
import { UseUserContext } from "../../hooks/useUserHook"





const Home = () => {
    const {user} = UseUserContext()
    const {budgets} = UseBudgetContext()


    return(
        <div className="m-10">
            <h1 className="text-6xl mb-5 font-bold text-gray-700">Welcome back, <span className="text-teal-500">{user.name}</span></h1>
            <div className='grid lg:grid-cols-2 gap-10 mb-5'>
            <AddBudget></AddBudget>
            {budgets.length > 0 && <AddExpense></AddExpense>}     
              </div>
                
            <h2 className="text-3xl mb-5 font-bold text-gray-700">My budgets:</h2>
            <div className="grid md:grid-cols-3 gap-5">
                <FetchBudget></FetchBudget>
            </div>
        </div>
    )
}

export default Home