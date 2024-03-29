import { Link } from "react-router-dom"
import UserInfo from "./userInfo"

const Navbar = () =>{

    return(
        <nav className=" bg-teal-500 p-5 shadow flex items-center justify-between">
            <div className='flex item'>
                <h1 className='text-3xl text-white font-bold'><Link to='/'>You-Budget</Link></h1>
            </div>
            <div className="">
                <UserInfo></UserInfo>
            </div>
        </nav>
    )
}

export default Navbar