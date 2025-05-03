import { useNavigate } from 'react-router-dom';

const Administrador = ({ nombreEmpleado, cargoEmpleado }) => {
  const navigate = useNavigate();


  const cerrarSesion = () => {

    alert('Sesión cerrada exitosamente');
    navigate('/');
  };

  return (
    

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <header>
      <nav class="navbar navbar-dark bg-dark" style={{width: '100%', padding: '1rem 2rem'}}>
        <h1 style={{color:'White', paddingRight:'1150px'}}>Turnify</h1>
        <button class="btn btn-outline-success my-2 my-sm-0" onClick={cerrarSesion}>Cerrar Sesion</button>
      </nav>
      </header>
      <h1>Bienvenido a Turnify</h1>

      <div style={{
        width: '600px', padding: '20px', borderRadius: '15px', border: '1px solid #ddd', textAlign: 'center'
      }}>
        <h3>👤 Nombre: {nombreEmpleado}</h3>
        <h4>🏷️ Cargo: {cargoEmpleado}</h4>

        <button style={buttonStyle} onClick={() => navigate('/lista')}>Ver Empleados</button>


      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px', 
  margin: '10px', 
  backgroundColor: '#4CAF50', 
  color: 'white', 
  border: 'none', 
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Administrador;
