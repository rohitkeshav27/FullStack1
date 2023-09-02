import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Employee() {

    const navigate = useNavigate()

    const [employees,setEmployees] = useState([])
    const [error,setError] = useState()

    useEffect( () =>
    {
        axios.get('http://localhost:8080/employees')
        .then(res => 
            {
                setEmployees(res.data)
            })
        .catch(err => 
            {
                setError(err)
            })
    },[employees])

    const deleteHandler = (employeeId) => 
    {
        
        console.log(`http://localhost:8080/delete/${employeeId}`)
        axios.delete(`http://localhost:8080/delete/${employeeId}`)
        alert(`Employee with ${employeeId} ID was deleted !!`)

    }

    const updateHandler = (emp) => 
    {
        navigate('/updateEmployee',{ state: { emp } })
    }

    return (
        <div className="App" >
            <h2>Employee Table</h2>
            <div className="App">
            <table className="table table-striped" >
            {employees.length === 0 ? null : <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>}
                <tbody>
                    {employees.length === 0 ? <p>No Employee to display</p> : 
                    employees.map(employee => (
                        <tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.empName}</td>
                            <td>{employee.empCity}</td>
                            <span></span>
                            <button onClick={() => updateHandler(employee)}>Update</button>
                            <button onClick={() => deleteHandler(employee.empId) }>Delete</button>
                        </tr>
                    )) }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Employee
