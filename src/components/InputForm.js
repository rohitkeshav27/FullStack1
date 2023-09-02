import React, { useState } from 'react'
import Employee from './Employee'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';

function InputForm() {

    const navigate = useNavigate()
    
    const [employee, setEmployee] = useState({
        empId: '',
        empName: '',
        empCity: '',
      });
    

    const changeHandler = (e) => 
    {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]:value
        })
        console.log({employee})
    }

    const submitHandler = (e) =>
    {
        //e.preventDefault();
        axios.post('http://localhost:8080/insert',employee)
        alert(`${employee.empId} ${employee.empName} ${employee.empCity} was added`)
    }

  return (
    <div>
      <form >
        <div>
        <label>Employee Id</label>
         <span>  </span>
        <input type='text' name='empId' value={employee.empId} onChange={changeHandler} placeholder='Enter your Id'/>
        </div>
        <div>
        <label>Employee Name</label>
         <span>  </span>
        <input type='text' name='empName' value={employee.empName} onChange={changeHandler} placeholder='Enter your name'/>
        </div>
        <div>
        <label>Employee City</label>
         <span>  </span>
        <input type='text' name='empCity' value={employee.empCity} onChange={changeHandler} placeholder='Enter your City'/>
        </div>
        <br></br>
        <button type='submit' onClick={submitHandler}>Submit</button>
        <span></span>
        <button onClick={() => navigate('/')}>Display Employees</button>
      </form>
      
    </div>
  )
}

export default InputForm
