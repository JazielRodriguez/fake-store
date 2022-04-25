import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Route } from 'wouter'
import Product from './pages/Product'
import Products from './pages/Products'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path='/'>
      <App />
    </Route>
    <Route path='/product/:id'>
      {params => <Product id={params.id}/>}
    </Route>
    <Route path='/products/:category'>
      {params => <Products category={params.category}/>}
    </Route>
  </React.StrictMode>
)
