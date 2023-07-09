import React, { createContext, useState,useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);//usuario
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  //guardo usuario cuando hace login
  
 
  const handleLogin = (loggedInUser) => {
    //guardo en el estado del contexto global
    setUser(loggedInUser);
    
    // Almacenar el usuario en localStorage
    //setItem crea o guarda en localstorage el usuario, (nombre de item, data)
    localStorage.setItem('user', JSON.stringify(loggedInUser)); 
    console.log("loggedInUser", loggedInUser);
    console.log(isLoggedIn);

  };
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser) {
        setUser(parsedUser);
        setIsLoggedIn(true);
        setLoggedInUser(parsedUser);
      }
    }
  }, []);
  
  const handleLogout = () => {
    setUser(null);
    // Eliminar el usuario de localStorage
    localStorage.removeItem('user'); 
  };


  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser,handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
