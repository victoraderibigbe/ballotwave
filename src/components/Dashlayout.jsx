import React from 'react'
import { Outlet } from 'react-router-dom'
import DashNav from './DashNav'

const Dashlayout = () => {
  return (
    <>
     <DashNav/>
    <Outlet/>
    </>
  )
}

export default Dashlayout