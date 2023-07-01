import React from 'react';
import Header from './Header';
import Tareaprincipal from './Tareaprincipal';


function Inicio({ isLoggedIn, loggedInUser }) {
  
  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <p>Bienvenido: {loggedInUser}</p>
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
