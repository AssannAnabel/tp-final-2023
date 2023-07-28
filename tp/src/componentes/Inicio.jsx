import React, { useContext, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tareaprincipal from "./Tareaprincipal";
import { UserContext } from "./UserContext";
import { CiEdit } from "react-icons/Ci";
import {MdDelete} from "react-icons/md";
import {ImExit} from "react-icons/Im";
import "../estilos/Inicio.css";
import { useNavigate } from "react-router-dom";// permite la navegacion de rutas en la aplicacion

function Inicio() {
  const navigate = useNavigate();
  const initialUrl = "https://647dd4d6af984710854a6fcc.mockapi.io/user-card";
  const userContext = useContext(UserContext);
  const {user,isLoggedIn,loggedInUser,setLoggedInUser,setIsLoggedIn,handleLogout,} = userContext;
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({}); //traemos el objeto

  useEffect(() => { // verifica si hay un usuario autenticado
    if (loggedInUser) {
      setIsLoggedIn(true);// se actualiza el estado
    }
  }, [loggedInUser]);

  useEffect(() => {//verifica si el usuario inicio sesion, se llama a la función fetchData para obtener los datos de la api.
    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  const fetchUserData = () => { //solicitud GET
    fetch(`${initialUrl}/${loggedInUser.id}`) // trae al usuario con la url y el Id
      .then((response) => response.json()) //obtiene los datos en formato json
      .then((data) => setUpdatedUser(data)) // actualiza el estado de componente con esos datos
      .catch((error) => console.log(error));
  };

  const handleEditClick = () => { // se ejecuta cuando se hace click en el boton EDITAR
    setEditing(true);
    setUpdatedUser(...loggedInUser);
  };

  const handleSaveClick = () => { // se ejecuta cuando se hace click en el boton GUARDAR, despues de editar los datos
    fetch(`${initialUrl}/${loggedInUser.id}`, {
      method: "PUT", // realiza una solicitud PUT, para acualizar los datos del usuario
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoggedInUser(data);
        setEditing(false);// se restablece en false
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteClick = () => { // se ejecuta cuando se hace click en el boton ELIMINAR
    fetch(`${initialUrl}/${loggedInUser.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setLoggedInUser({});// lo restablece en un objeto vacio
        setIsLoggedIn(false);// lo setea en false
      })
      .catch((error) => console.log(error));
  };

  const handleLogoutClick = (e) => {//para cerrar sesión
    
    e.preventDefault();
    handleLogout();// lo trae del contexto
    navigate("/");// navega a la ruta publica Login
  };

  const handleInputChange = (e) => {
    setUpdatedUser((prevState) => ({
      ...prevState, // trae todo para editar
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />

      {user ? (
        <>
          <h3>¡Bienvenido {loggedInUser.name}!</h3>
          <div className="container-p">
            {editing ? (
              <>
                <input
                  className="input-edit-usuario"
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleInputChange}
                />
                <input
                  className="input-edit-usuario"
                  type="text"
                  name="lastName"
                  value={updatedUser.lastName}
                  onChange={handleInputChange}
                />
                <input
                  className="input-edit-usuario"
                  type="text"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                />
                <input
                  className="input-edit-usuario"
                  type="text"
                  name="password"
                  value={updatedUser.password}
                  onChange={handleInputChange}
                />
                <button className="btn-guardar" onClick={handleSaveClick}>
                  Guardar
                </button>
              </>
            ) : (
              <>
              <div className="container-usuario">
                <h3 className="usuario">{updatedUser.name} </h3>
                <CiEdit  onClick={handleEditClick}/>
                <MdDelete  onClick={handleDeleteClick}/>
                <ImExit onClick={handleLogoutClick} />

                </div>
                {/* <button className="btn-editar" onClick={handleEditClick}>
                  <CiEdit />
                </button> */}
              </>
            )}
            {/* <button className="btn-perfil" onClick={handleDeleteClick}>
              <MdDelete/>
            </button> */}
            {/* <button className="btn-perfil" onClick={handleLogoutClick}>
              <ImExit/>
            </button> */}
           
          </div>

          <div className="tareas">
            <Tareaprincipal />
          </div>
        </>
      ) : null}
      <Footer />
    </>
  );
}

export default Inicio;
