import React, { useContext, useState, useEffect } from 'react';
import Header from './Header';
import Tareaprincipal from './Tareaprincipal';
import { UserContext } from './UserContext';
import { CiEdit } from "react-icons/Ci";
import '../estilos/Inicio.css';

function Inicio() {
  const initialUrl = 'https://647dd4d6af984710854a6fcc.mockapi.io/user-card';
  const userContext = useContext(UserContext);
  const { isLoggedIn, loggedInUser, setLoggedInUser, setIsLoggedIn } = userContext;
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});//traemos el objeto

  useEffect(() => {
    if (isLoggedIn) {// si es verdadero, trae todos los datos del usuario
      fetchUserData();
    }
  }, [isLoggedIn]);

  const fetchUserData = () => {
    fetch(`${initialUrl}/${loggedInUser.id}`)// trae al usuario con la url y el Id
      .then(response => response.json())//obtiene los datos en formato json
      .then(data => setUpdatedUser(data))// actualiza el estado de componente con esos datos
      .catch(error => console.log(error));
  };

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedUser(...loggedInUser);//traemos todos los datos
  };

  const handleSaveClick = () => {
    fetch(`${initialUrl}/${loggedInUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => response.json())
      .then(data => {
        setLoggedInUser(data);
        setEditing(false);
      })
      .catch(error => console.log(error));
  };

  const handleDeleteClick = () => {
    fetch(`${initialUrl}/${loggedInUser.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setLoggedInUser({});
        setIsLoggedIn(false);
      })
      .catch(error => console.log(error));
  };

  const handleLogoutClick = () => {//para cerrar sesión
    setLoggedInUser({});
    setIsLoggedIn(false);
  };

  const handleInputChange = e => {
    setUpdatedUser(prevState => ({
      ...prevState,// trae todo para editar
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Header />

      {isLoggedIn ? (
        <>
          <div className='container-p'>
            {editing ? (
              <>
                <input
                  type='text'
                  name='name'
                  value={updatedUser.name}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='lastName'
                  value={updatedUser.lastName}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='email'
                  value={updatedUser.email}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='password'
                  value={updatedUser.password}
                  onChange={handleInputChange}
                />
                <button onClick={handleSaveClick}>Guardar</button>
              </>
            ) : (
              <>
                <p>{loggedInUser.name}</p>
                {/* <p>{loggedInUser.email}</p>  */}
                <button onClick={handleEditClick}>
                  <CiEdit className='boton-editar' />
                </button>
              </>
            )}
            <button onClick={handleDeleteClick}>Eliminar</button>
            <button onClick={handleLogoutClick}>Cerrar Sesión</button>
          </div>

          <Tareaprincipal />
          <Tareaprincipal />
          <Tareaprincipal />
          <Tareaprincipal />
        </>
      ) : null}
    </>
  );
}

export default Inicio;
