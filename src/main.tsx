import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Route } from 'wouter'
import Products from './pages/Products'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path='/'><App /></Route>
    <Route path='/products'><Products /></Route>
  </React.StrictMode>
)
