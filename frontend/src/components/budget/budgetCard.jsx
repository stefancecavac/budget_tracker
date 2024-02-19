

const BudgetCard = ({ budget }) => {

    return (
        <div className='border-4 border-lime-500 rounded-2xl shadow p-3'>
            <div className="flex justify-between">
                <p className="text-2xl text-lime-500 font-bold">{budget.title}</p>
                <p className="text-2xl text-lime-500 font-bold">${budget.budget}</p>
            </div>


            <p>{budget.expenses}</p>

        </div>
    )
}

export default BudgetCard