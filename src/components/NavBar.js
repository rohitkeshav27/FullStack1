import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <NavLink to='/addEmployee'>Add Employee</NavLink>
    </div>
  )
}

export default NavBar
