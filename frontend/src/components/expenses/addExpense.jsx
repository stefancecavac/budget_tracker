
const AddExpense = () => {


    return (
        <div className='bg-gray-100 rounded shadow p-2'>
            <form className="border-2 border-dashed border-teal-500 rounded p-2 flex flex-col">
                <h2 className='text-gray-500 text-2xl font-bold mb-2'>Add new expense</h2>

                <label className='text-gray-500 mb-1'>Budget:</label>
                <input className='border-2 border-teal-500 rounded p-1 mb-1'></input>

                <div>
                    <label className='text-gray-500 mb-1'>Expense name:</label>
                    <input className='border-2 border-teal-500 rounded p-1 mb-1'></input>

                    <label className='text-gray-500 mb-1'>Expense amount:</label>
                    <input className='border-2 border-teal-500 rounded p-1 mb-5'></input>
                </div>


                <button className='bg-teal-500 rounded border-2 text-white p-1 flex w-2/6 justify-center hover:bg-white hover:text-teal-500 hover:border-2 border-teal-500'>Add Expense</button>
            </form>
        </div>)
}

export default AddExpense