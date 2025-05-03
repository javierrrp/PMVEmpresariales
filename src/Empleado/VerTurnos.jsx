import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { supabase } from "../assets/supabaseClient";
import { useEffect } from 'react';

const VerTurnosEmpleados = () => {

    const navigate = useNavigate();

    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
          const fetchTurnos = async () => {
            const { data, error } = await supabase
              .from('turnos')
              .select('*');
        
            if (error) {
              console.error('Error al obtener usuarios:', error.message);
            } else {
              setTurnos(data);
            }
          };
        
          fetchTurnos();
        }, []);
    

    const cerrarSesion = () => {

        alert('Sesión cerrada exitosamente');
        navigate('/');
      };

    return(

        <div>
        <header>
            <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
                <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
            </nav>
        </header>
        
        <table className="table table-striped" style={{width: '100%'}}>
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-1">Fecha Inicio</th>
                <th className="border px-3 py-1">Fecha Termino</th>
                <th className="border px-3 py-1">Hora Inicio</th>
                <th className="border px-3 py-1">Hora Termino</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((emp) => (
                <tr key={emp.id}>
                  <td className="border px-3 py-1 text-center">{emp.fecha_inicio}</td>
                  <td className="border px-3 py-1 text-center">{emp.fecha_termino}</td>
                  <td className="border px-3 py-1">{emp.hora_inicio}</td>
                  <td className="border px-3 py-1">{emp.hora_termino}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
    )
}

export default VerTurnosEmpleados;