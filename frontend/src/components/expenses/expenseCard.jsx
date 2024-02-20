

const ExpenceCard = ({expence}) => {


    return(
        <div className="flex border-2 border-dashed border-teal-500  bg-gray-200 mb-3 p-3 shadow rounded-full">
            <h2>Name: {expence.name}</h2>
            <p> ${expence.amount}</p>
        </div>
    )
}

export default ExpenceCard