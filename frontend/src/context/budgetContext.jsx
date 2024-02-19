import { createContext, useReducer } from "react";


export const BudgetContext = createContext()

export const BudgetReducer = (state ,action) =>{
    switch (action.type) {
        case "SET_BUDGETS":
            return {
                budgets: action.payload
            }
        case 'POST_BUDGET':
            return {
                budgets: [action.payload, ...state.budgets]
            }
        case 'DELETE_BUDGET':
            return {
                budgets: state.budgets.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const BudgetContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(BudgetReducer, {
        budgets:null
    })

    return(
        <BudgetContext.Provider value={{...state , dispatch}}>
            {children}
        </BudgetContext.Provider>
    )

}
