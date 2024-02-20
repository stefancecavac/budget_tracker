import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const UseUserContext = () => {
    const context = useContext(UserContext)

    if(!context){
        throw Error('useUserContext must be used inside a userContextProvider')
    }
    return context
}
