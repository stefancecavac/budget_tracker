import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BudgetContextProvider } from './context/budgetContext.jsx'
import { UserContextProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <BudgetContextProvider>
        <App />

      </BudgetContextProvider>
    </UserContextProvider>

  </React.StrictMode>,
)
