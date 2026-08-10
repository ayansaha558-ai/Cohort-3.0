import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {
  let {isAuthenticated}=useSelector(store=>store.auth);

  if(!isAuthenticated){
    return <Navigate to={"/"}/>
  }
  
  return <Outlet/>
}

export default MainProtected