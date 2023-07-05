import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from './UserContext';
import Inicio from './Inicio';
import '../estilos/Login.css';
import Imagen from './Imagen'

function Login() {//estados
  const { user, setUser, isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(UserContext);


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
      setIsLoggedIn(true);
      setLoggedInUser(userFound);
     
      
    } else {
      notificacionRef.current.style.color = 'red';
      notificacionRef.current.innerHTML = 'Usuario o contraseña incorrectos';
    }

    e.target.reset(); // para limpiar
  }

  function handleSubmitRegis(e) {// componente Registro
    e.preventDefault();
    window.location = '/registro';
    
  }

  return (
    <>
    <Imagen/>
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>
          <div className='div-form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" placeholder='Ingrese su mail'/>

            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password" placeholder='Ingrese su contraseña'/>

            <p id="notificacion" ref={notificacionRef}></p>
            <button type="submit">Iniciar Sesion</button>
          </form>

          <form onSubmit={handleSubmitRegis}>
            <button type="submit">Registrarme</button>
          </form>
          </div>
        </>
      ) : (
        <>
          <h3>Bienvenido!{loggedInUser.name}</h3>
         <Inicio /> {/*redirecciona mensaje a la ruta indicada */}
        </>
      )}
    </>
  );
}

export default Login;
