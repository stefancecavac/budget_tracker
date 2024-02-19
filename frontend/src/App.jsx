import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/header/navbar'

import Home from './pages/home/home'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
