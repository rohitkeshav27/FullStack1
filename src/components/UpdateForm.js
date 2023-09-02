import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router';

function UpdateForm() {

    const navigate = useNavigate()

    const location = useLocation();
    const data = location.state.emp;

    const [employee,setEmployee] = useState(data)

    useEffect(() => 
    {
        console.log(employee)
    },[employee])
     
    const changeHandler = (e) => 
    {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]:value
        })
        console.log(`${employee}`)
    }

    const submitHandler = (e) =>
    {
        //e.preventDefault();
        axios.put(`http://localhost:8080/update/${employee.empId}`,employee)
        alert(`${employee.empId} ${employee.empName} ${employee.empCity} was Updated`)
        navigate('/')
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
        <button type='submit' onClick={submitHandler}>Update</button>
        <span></span>
        <button onClick={() => navigate('/')}>Display Employees</button>
      </form>
      
    </div>
  )
}
export default UpdateForm
