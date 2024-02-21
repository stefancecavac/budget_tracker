import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import Navbar from './components/header/navbar'

import Home from './pages/home/home'
import BudgetDetail from './pages/budgetInDetail/budgetDetail'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import { UseUserContext } from './hooks/useUserHook'

function App() {
  const {user} = UseUserContext()

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>

           {user && <Navbar></Navbar>}
        <Routes>
          <Route index element={!user ? (<Navigate to='/login'></Navigate>) : (<Home></Home>)}></Route>
          <Route path='/:budgetId' element={user ? (<BudgetDetail></BudgetDetail>) : (<Navigate to='/login'></Navigate>)}></Route>

          <Route path='/register' element={user? (<Navigate to='/'></Navigate>): (<Register></Register>)}></Route>
          <Route path='/login' element={user? (<Navigate to='/'></Navigate>): (<Login></Login>)}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
