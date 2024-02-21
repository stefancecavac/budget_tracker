import { createContext, useReducer } from "react";


export const BudgetContext = createContext()

export const BudgetReducer = (state, action) => {
    switch (action.type) {
        case "SET_BUDGETS":
            return {
                budgets: action.payload,
                singleBudget: state.singleBudget,
                expenses: state.expenses
            };
        case "SET_BUDGET":
            return {
                budgets: state.budgets,
                singleBudget: action.payload,
                expenses: state.expenses
            };
        case 'POST_BUDGET':
            return {
                budgets: [action.payload, ...state.budgets],
                singleBudget: state.singleBudget,
                expenses: state.expenses
            };
        case 'POST_EXPENSE':
            return {
                budgets: state.budgets,
                singleBudget: state.singleBudget,
                expenses: [action.payload, ...state.expenses ]
            };
        case 'DELETE_BUDGET':
            return {
                budgets: state.budgets.filter((budget) => budget._id !== action.payload._id),
                singleBudget: state.singleBudget,
                expenses: state.expenses
            };
        case 'DELETE_EXPENSE':
            return {
                budgets: state.budgets,
                singleBudget: state.singleBudget,
                expenses: state.expenses.filter((expense) => expense._id !== action.payload._id)
            };
        default:
            return state;
    }
};

export const BudgetContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BudgetReducer, {
        budgets:[],singleBudget:{} , expenses:[]
    })
    console.log(state)

    

    return (
        <BudgetContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )

}
