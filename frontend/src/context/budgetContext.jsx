import { createContext, useReducer } from "react";


export const BudgetContext = createContext()

export const BudgetReducer = (state, action) => {
    switch (action.type) {
        case "SET_BUDGETS":
            return {
                budgets: action.payload
            };
        case "SET_BUDGET":
            return {
                singleBudget: action.payload
            };
        case 'POST_BUDGET':
            return {
                budgets: [action.payload, ...state.budgets]
            };
        case 'PUT_EXPENSE':
            return {
                budgets: state.budgets.map((budget) => (budget._id === action.payload._id ? action.payload : budget))
            }
        case 'DELETE_BUDGET':
            return {
                singleBudget: state.singleBudget.filter((sbudget) => sbudget._id !== action.payload._id)
            };
        case 'DELETE_EXPENSE':
            return {
                budgets: state.budgets.filter((budget) =>(budget._id === action.payload._id ? action.payload : budget))    
                    };
        default:
            return state;
    }
}
export const BudgetContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BudgetReducer, {
        budgets: [],singleBudget:[]
    })
    console.log(state)

    return (
        <BudgetContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )

}
