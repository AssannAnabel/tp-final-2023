import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from './UserContext';
import Inicio from './Inicio';

function Login() {
  const { user, setUser, isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(UserContext);


  const inicialUrl = 'https://647dd4d6af984710854a6fcc.mockapi.io/user-card';
  const notificacionRef = useRef(null);

  const fetchUser = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(inicialUrl);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    let loginUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    let userFound = user.find((user) => user.email === loginUser.email);

    if (userFound && userFound.password === loginUser.password) {
      setIsLoggedIn(true);
      setLoggedInUser(userFound.name);
    } else {
      notificacionRef.current.style.color = 'red';
      notificacionRef.current.innerHTML = 'Usuario o contraseña incorrectos';
    }

    e.target.reset(); // para limpiar
  }

  function handleSubmitRegis(e) {
    e.preventDefault();

    window.location = '/registro';
  }

  return (
    <>
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" />

            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password" />

            <p id="notificacion" ref={notificacionRef}></p>
            <button type="submit">Iniciar Sesion</button>
          </form>

          <form onSubmit={handleSubmitRegis}>
            <button type="submit">Registrarme</button>
          </form>
        </>
      ) : (
        <>
          
        
          <Inicio />
        </>
      )}
    </>
  );
}

export default Login;
