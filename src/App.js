import './App.css';
import Employee from './components/Employee';
import {Route , Routes , useLocation} from 'react-router-dom' ;
import InputForm from './components/InputForm';
import NavBar from './components/NavBar';
import AddEmployeeButton from './components/AddEmployeeButton';
import UpdateForm from './components/UpdateForm';

function App() {
  const location = useLocation();
    const isAddEmployeeRoute = location.pathname === '/addEmployee';
  return (
    
    
    <div>
      <Routes>
        <Route path='/' element={<Employee/>} />
        <Route path='/addEmployee' element={<InputForm/>}/>
        <Route path='/updateEmployee' element={<UpdateForm/>}/>
      </Routes>
      {!isAddEmployeeRoute && <AddEmployeeButton />}
      
    </div>
  );
}

export default App;
