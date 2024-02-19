

const AddBudget = () => {

    return (
        <div className='bg-gray-100 rounded shadow p-2'>
            <form className="border-2 border-dashed border-teal-500 rounded p-2 flex flex-col">
                <h2 className='text-gray-500 text-2xl font-bold mb-2'>Create new budget</h2>
                <label className='text-gray-500 mb-1'>Budget name:</label>
                <input className='border-2 border-teal-500 rounded p-1 mb-1'></input>

                <label className='text-gray-500 mb-1'>Budget amount:</label>
                <input className='border-2 border-teal-500 rounded p-1 mb-5'></input>

                <button className='bg-teal-500 rounded border-2 text-white p-1 flex w-2/6 justify-center hover:bg-white hover:text-teal-500 hover:border-2 border-teal-500'>Create Budget</button>
            </form>
        </div>
    )
}

export default AddBudget