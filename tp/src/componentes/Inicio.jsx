import React, { useContext } from 'react';
import Header from './Header';
import Tareaprincipal from './Tareaprincipal';
import { UserContext } from './UserContext';

function Inicio() {
  const userContext = useContext(UserContext);
  const { isLoggedIn, loggedInUser } = userContext;

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <h3>Bienvenido: {loggedInUser}</h3>
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



