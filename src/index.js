import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './Containers/Login'
import Register from './Containers/Register'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </>
)
