import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ element, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to="/" />
  }

  return <Route {...rest} element={element} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
