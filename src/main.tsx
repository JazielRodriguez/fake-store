import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Route } from 'wouter'
import Product from './pages/Product'
import PageCategories from './pages/PageCategories'
import SignIn from './pages/SignIn'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path='/'>
      <App />
    </Route>
    <Route path='/signin'><SignIn /></Route>
    <Route path='/products/product/:id'>{(params) => <Product id={params.id} />}</Route>
    <Route path='/products/:category'>
      {(params) => <PageCategories category={params.category} />}
    </Route>

  </React.StrictMode>
)
