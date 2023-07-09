import React, { useContext, useEffect, useRef } from 'react';
import Footer from './Footer';
import { UserContext } from './UserContext';
import '../estilos/Login.css';
import Imagen from './Imagen'
import { useNavigate } from "react-router-dom";

function Login() {//estados
  const { user, setUser, isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser, handleLogin } = useContext(UserContext);
const navigate= useNavigate()

  const inicialUrl = 'https://647dd4d6af984710854a6fcc.mockapi.io/user-card';
  const notificacionRef = useRef(null);

  const fetchUser = (url) => {
    fetch (url)
      .then(response =>response.json())
      .then (data => setUser(data))
      .catch(error =>console.log(error));
  };
  useEffect(() => {
    fetchUser(inicialUrl);
  }, []);

  function handleSubmit(e) {//lógica del envio de formulario
    e.preventDefault();

    let loginUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
//lógica validación del usuario
    let userFound = user.find((user) => user.email === loginUser.email);

    
    if (userFound && userFound.password === loginUser.password) {
      handleLogin(userFound);
      localStorage.setItem('user', JSON.stringify(userFound)); // Guardar el usuario en localStorage
      setIsLoggedIn(true);
      setLoggedInUser(userFound);
      navigate('/inicio');
    }
    
      
     else {
      notificacionRef.current.style.color = 'red';
      notificacionRef.current.innerHTML = 'Usuario o contraseña incorrectos';
    }

    e.target.reset(); // para limpiar
  }

  function handleSubmitRegis(e) {// componente Registro
    e.preventDefault();
    navigate("/registro");
  
    
  }

  return (
    <>
    <Imagen/>
          <h2>Login</h2>
          <div className='div-form'>
          <form onSubmit={handleSubmit}>
            <label className='label-email' htmlFor="email">Email: </label>
            <input className='input-email' type="text" name="email" id="email" placeholder='Ingrese su Email'/>

            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password" placeholder='Ingrese su Contraseña'/>

            <p id="notificacion" ref={notificacionRef}></p>
            <button type="submit">Iniciar Sesion</button>
          </form>

          <form onSubmit={handleSubmitRegis}>
            <button className='btn-registrarme' type="submit">Registrarme</button>
          </form>
          </div>
          <Footer/>
        </>
      
  );
}

export default Login;
