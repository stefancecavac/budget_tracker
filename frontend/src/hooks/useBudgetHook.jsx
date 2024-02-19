import { useContext } from "react"
import { BudgetContext } from "../context/budgetContext"



export const UseBudgetContext = () =>{
    const context = useContext(BudgetContext)

    if(!context){
        throw Error('useBudgetContext must be used inside a BudgetContextProvider')
    }

    return context
}