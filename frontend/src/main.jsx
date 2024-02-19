import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BudgetContextProvider} from './context/budgetContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetContextProvider>
    <App />

    </BudgetContextProvider>
  </React.StrictMode>,
)
