import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
   const {login} = useContext(userContext)
   if (!login.auth) {
     return <Navigate to={'/register'}/>
   }
  return children
}

export default Protected