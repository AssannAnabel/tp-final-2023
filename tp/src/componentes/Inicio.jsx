import React, { useContext, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tareaprincipal from './Tareaprincipal';
import { UserContext } from './UserContext';
import { CiEdit } from "react-icons/Ci";
import '../estilos/Inicio.css';
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate= useNavigate()
  const initialUrl = 'https://647dd4d6af984710854a6fcc.mockapi.io/user-card';
  const userContext = useContext(UserContext);
  const { user, isLoggedIn, loggedInUser, setLoggedInUser, setIsLoggedIn, handleLogout } = userContext;
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});//traemos el objeto
 
  useEffect(() => {
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (isLoggedIn) {
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

  const handleLogoutClick = (e) => {//para cerrar sesión
    e.preventDefault();
    handleLogout()
    navigate("/");
  };

  const handleInputChange = e => {
    setUpdatedUser(prevState => ({
      ...prevState,// trae todo para editar
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      
     <Header/>
     
      {user ? (
        <>
        <h3>¡Bienvenido {loggedInUser.name}!</h3>
          <div className='container-p'>
            {editing ? (
              <>
                <input className='input-edit-usuario'
                  type='text'
                  name='name'
                  value={updatedUser.name}
                  onChange={handleInputChange}
                />
                <input className='input-edit-usuario'
                  type='text'
                  name='lastName'
                  value={updatedUser.lastName}
                  onChange={handleInputChange}
                />
                <input className='input-edit-usuario'
                  type='text'
                  name='email'
                  value={updatedUser.email}
                  onChange={handleInputChange}
                />
                <input className='input-edit-usuario'
                  type='text'
                  name='password'
                  value={updatedUser.password}
                  onChange={handleInputChange}
                />
                <button className='btn-guardar' onClick={handleSaveClick}>Guardar</button>
              </>
            ) : (
              <>
                <h3 className='usuario'>{updatedUser.name}</h3>
             
                <button className='btn-editar' onClick={handleEditClick}>
                  <CiEdit />
                </button>
              </>
            )}
            <button className='btn-perfil' onClick={handleDeleteClick}>Eliminar</button>
            <button className='btn-perfil' onClick={handleLogoutClick}>Cerrar Sesión</button>
          </div>
         
        <div className='tareas'>
          <Tareaprincipal />
          <Tareaprincipal />
          <Tareaprincipal />
          <Tareaprincipal />
          </div>
        </>
      ) : null}
      <Footer/>
    </>
  );
}

export default Inicio;
