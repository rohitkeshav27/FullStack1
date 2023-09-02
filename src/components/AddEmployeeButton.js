import React from 'react'
import { useNavigate } from 'react-router'

function AddEmployeeButton() {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/addEmployee')}>Add Employee</button>
    </div>
  )
}

export default AddEmployeeButton
