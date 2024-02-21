

const BudgetCard = ({ budget }) => {

    const totalExpenses = budget.expenses.reduce((acc, expense) => acc + expense.amount, 0);

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <div className='border-2 border-teal-500 rounded-2xl shadow p-3'>
    
            <div className="flex justify-between">
                <p className="text-2xl text-teal-500 font-bold">{budget.title}</p>
                <p className="text-2xl text-teal-500 font-bold">{currencyFormat(budget.budget)}</p>
            </div>
            
            <div className="flex justify-center mt-5 mb-3">
            <progress className="[&::-webkit-progress-bar]:rounded-lg w-11/12 h-5 [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-gray-300
             [&::-webkit-progress-value]:bg-teal-400 [&::-moz-progress-bar]:bg-violet-400" max={budget.budget} value={totalExpenses} ></progress>
            </div>

            <div className="flex justify-between">
            <p className="text-teal-500">Spent:{currencyFormat(totalExpenses)} </p>
            <p className="text-gray-400">Remaining:{currencyFormat(budget.budget - totalExpenses)} </p>
            </div>

          
        </div>
    )
}

export default BudgetCard