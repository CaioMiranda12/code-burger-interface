import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <PrivateRoute element={<Home />} path="/" />
      </Routes>
    </Router>
  )
}

export default MyRoutes
