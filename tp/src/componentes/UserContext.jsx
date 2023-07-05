import React, { createContext, useState,useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  //guardo usuario cuando hace login
  
 
  const handleLogin = (loggedInUser) => {
    //guardo en el estado del contexto global
    setUser(loggedInUser);
    // Almacenar el usuario en localStorage
    //setItem crea o guarda en localstorage el usuario, (nombre de item, data)
    localStorage.setItem('user', JSON.stringify(loggedInUser)); 
  };
  useEffect(() => {
    // Recuperar el usuario almacenado en localStorage (si existe)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser,handleLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
