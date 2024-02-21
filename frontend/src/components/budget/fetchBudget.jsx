import { useEffect, useState } from "react"
import {UseBudgetContext} from '../../hooks/useBudgetHook'

import BudgetCard from "./budgetCard"
import { Link } from "react-router-dom"

const FetchBudget = () =>{ 
    const {budgets , dispatch , expenses} = UseBudgetContext()
    const [loading ,setLoading ] = useState(true)

    useEffect(() =>{
        const fetchData = async() => {
            try{
                const response =  await fetch(`http://localhost:4000/api/budgets`,{
                    credentials: 'include',
                })
                const json = await response.json()

                if(response.ok){
                    dispatch({type:'SET_BUDGETS' , payload:json})
                  

                    setLoading(false)
                }
            }
            catch(error){
                console.log(error)
            }
            
        }
        fetchData()
    },[dispatch ,expenses]) /////////////asdaSJFADJGDAFGJDAGJND /////// neeed to add dependecyies if you want to update after deleting or updating 

    return(
        
                
        loading ? (
            <p>...loading</p>
        ) : (budgets && budgets.map((budget) => (
            <Link className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  duration-100"
             key={budget._id} to={`/${budget._id}`}><BudgetCard budget={budget}></BudgetCard></Link> 
         )))
        
      
    )
}

export default FetchBudget