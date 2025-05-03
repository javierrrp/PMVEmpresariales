import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { supabase } from './assets/supabaseClient';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { data: usuarios, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('correo', correo)
      .eq('contrasena', contrasena);
      console.log({ usuarios, error });


      if (usuarios.length > 0) {
        const perfil = usuarios[0]; // accedemos al primer usuario
        if (perfil.tipo_usuario === 'administrador') {
          navigate('/admin');
        } else if (perfil.tipo_usuario === 'empleado') {
          navigate('/empleado');
        }
      } else {
        alert('Correo o contraseña incorrectos');
      }}
  return (
    <div className='container-general'>
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Correo Electronico' onChange={(e) => setCorreo(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' onChange={(e) => setContrasena(e.target.value)} required/>
        </div>

        <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href='#'>Olvidaste tu contraseña?</a>
        </div>
        <div className='input-box'>
        <button type='submit'>Iniciar Sesion</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Login;
