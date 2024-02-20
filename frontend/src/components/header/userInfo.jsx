import { UseBudgetContext } from "../../hooks/useBudgetHook"
import { UseUserContext } from "../../hooks/useUserHook"


const UserInfo = () => {
    const {dispatch , user} = UseUserContext()
    const {dispatch:budgetDispatch} = UseBudgetContext()
    
    const handleLogout = async() =>{ 
        await fetch(`http://localhost:4000/api/user/logout`, {
            method: 'POST',
            credentials: 'include'
            
            })
       localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        budgetDispatch({type:'SET_BUDGETS' ,payload:null})
     }
    return(
        <div>
            {user && <button className="text-1xl text-white border-2 border-white rounded-full p-1 hover:bg-white hover:boder-teal-500 hover:text-teal-500 "
             onClick={handleLogout} >Logout</button>}
        </div>
    )
}

export default UserInfo