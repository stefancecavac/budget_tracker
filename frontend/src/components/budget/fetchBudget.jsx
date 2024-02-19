import { useEffect } from "react"
import {UseBudgetContext} from '../../hooks/useBudgetHook'

import BudgetCard from "./budgetCard"

const FetchBudget = () =>{ 
    const {budgets , dispatch} = UseBudgetContext()

    useEffect(() =>{
        const fetchData = async() => {
            try{
                const response =  await fetch(`http://localhost:4000/api/budgets`)
                const json = await response.json()

                if(response.ok){
                    dispatch({type:'SET_BUDGETS' , payload:json})
                }
            }
            catch(error){
                console.log(error)
            }
            
        }
        fetchData()
    },[dispatch])

    return(
        
                
            
        budgets && budgets.map((budget) => (
                <BudgetCard key={budget._id} budget={budget}></BudgetCard>
            ))
      
    )
}

export default FetchBudget