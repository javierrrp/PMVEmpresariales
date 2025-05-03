
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-multi-date-picker";
import { useState } from 'react';


const AsignarTurno = () => {

    const navigate = useNavigate();
    const [selectedDates, setSelectedDates] = useState([]);
    
    const cerrarSesion = () => {

        alert('Sesión cerrada exitosamente');
        navigate('/');
    };

    const asignar = () => {

        alert('Turno asignado exitosamente');
        navigate('/admin');

      };

    return (
    <div>
        <header>
            <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
                <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
            </nav>
        </header>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese rut del empleado</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" className='ola1'/>
            </div>

            <div style={{display: 'flex'}}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Apellido</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Seleccione los dias</label>
                <DatePicker 
                multiple 
                value={selectedDates} 
                onChange={setSelectedDates}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Seleccione hora</label>
                <div style={{display: 'flex'}}>
                    <input type='time' class="form-control" id="exampleInputPassword1" />
                    Hasta 
                    <input type='time' class="form-control" id="exampleInputPassword1" />
                </div>
            </div>

            <select>
                <option value="rrhh">Recursos Humanos</option>
                <option value="ventas">Ventas</option>
                <option value="marketing">Marketing</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="finanzas">Finanzas</option>
                <option value="produccion">Producción</option>
                <option value="logistica">Logística</option>
                <option value="it">Tecnologías de la Información (TI)</option>
            </select>
            <button type="submit" class="btn btn-primary" onClick={asignar}>Asignar Turno</button>
        </form>
    </div>
    );
}

export default AsignarTurno;