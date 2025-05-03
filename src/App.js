
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import AdminPanel from './Administrador/AdminPanel';
import EmployeePanel from './Empleado/EmployeePanel';
import Empleados from './Administrador/VerEmpleados';
import VerTurnosEmpleados from './Empleado/VerTurnos';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/empleado" element={<EmployeePanel />} />
        <Route path='/lista' element={<Empleados />} />
        <Route path='/verturnos' element={<VerTurnosEmpleados />} />
      </Routes>
    </Router>
  );
}

export default App;
