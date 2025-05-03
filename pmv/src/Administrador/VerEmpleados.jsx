import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../assets/supabaseClient';
import { useEffect } from 'react';


const Empleados = () => {
    const [datos, setDatos] = useState([]);

    const navigate = useNavigate();

    const [nuevo, setNuevo] = useState({nombre: '', apellidos: '', rut: '', correo: '', contrasena: '', tipo_usuario: ''});

    useEffect(() => {
      const fetchEmpleados = async () => {
        const { data, error } = await supabase
          .from('usuarios')
          .select('*');
    
        if (error) {
          console.error('Error al obtener usuarios:', error.message);
        } else {
          setDatos(data);
        }
      };
    
      fetchEmpleados();
    }, []);
    

    const handleAgregar = async () => {
      if (
        nuevo.nombre.trim() &&
        nuevo.apellidos.trim() &&
        nuevo.rut.trim() &&
        nuevo.correo.trim() &&
        nuevo.contrasena.trim() &&
        nuevo.tipo_usuario.trim()
      ) {
        const { data, error } = await supabase.from('usuarios').insert([{
          nombre: nuevo.nombre,
          apellidos: nuevo.apellidos,
          rut: nuevo.rut,
          correo: nuevo.correo,
          contrasena: nuevo.contrasena,
          tipo_usuario: nuevo.tipo_usuario
        }]).select();
        if (error) {
          alert('Error al agregar usuario: ', error.message);
        } else {
          alert('Usuario agregado');
          setDatos([...datos, { id: data[0].id, ...nuevo }]);
          setNuevo({ nombre: '', apellidos: '', rut: '', email: '', contrasena: '', tipo_usuario: ''})
        }
      }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevo((prev) => ({ ...prev, [name]: value }));
    };
    const cerrarSesion = () => {

      alert('Sesión cerrada exitosamente');
      navigate('/');
    };
    
    return (
      
        <div className="p-4 max-w-3xl mx-auto">
           <header>
            <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
              <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
              <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
            </nav>
            </header>
          <h2 className="text-2xl font-bold mb-4">Empleados</h2>
    
          <table className="w-full table-auto border mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-1">ID</th>
                <th className="border px-3 py-1">Nombre</th>
                <th className="border px-3 py-1">Apellidos</th>
                <th className="border px-3 py-1">RUT</th>
                <th className="border px-3 py-1">Correo</th>
                <th className="border px-3 py-1">Contraseña</th>
                <th className="border px-3 py-1">Rol</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((emp) => (
                <tr key={emp.id}>
                  <td className="border px-3 py-1 text-center">{emp.id}</td>
                  <td className="border px-3 py-1">{emp.nombre}</td>
                  <td className="border px-3 py-1">{emp.apellidos}</td>
                  <td className="border px-3 py-1">{emp.rut}</td>
                  <td className="border px-3 py-1">{emp.correo}</td>
                  <td className="border px-3 py-1">{emp.contrasena}</td>
                  <td className="border px-3 py-1">{emp.tipo_usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nuevo.nombre}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={nuevo.apellidos}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="text"
              name="rut"
              placeholder="RUT"
              value={nuevo.rut}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="text"
              name="correo"
              placeholder='Correo Electronico'
              value={nuevo.correo}
              onChange={handleInputChange}
              className="border p-2"
            />
            <input
              type="text"
              name="contrasena"
              placeholder='Contraseña'
              value={nuevo.contrasena}
              onChange={handleInputChange}
              className="border p-2"
            />
           <select
              name="tipo_usuario"
              value={nuevo.tipo_usuario}
              onChange={handleInputChange}
              className="border p-2"
            >
              <option value="">Selecciona tipo de usuario</option>
              <option value="administrador">Administrador</option>
              <option value="empleado">Empleado</option>
            </select>
            <button
              onClick={handleAgregar}
              className="btn btn-success"
            >
              Agregar Empleado
            </button>
          </div>
        </div>
      );
}
export default Empleados;