
import React, { useState } from 'react';
import Listadetareas from './ListaDeTareas';
import '../estilos/Tareaprincipal.css'

function Tareaprincipal() {
  const [titulo, setTitulo] = useState('Titulo que se puede cambiar');
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [editandoTitulo, setEditandoTitulo] = useState(false);

  const handleTituloChange = (event) => {
    setNuevoTitulo(event.target.value);
  };

  const handleTituloSubmit = (e) => {
    e.preventDefault();
    setTitulo(nuevoTitulo);
    setNuevoTitulo('');
    setEditandoTitulo(false);
  };

  const handleEditarTitulo = () => {
    setEditandoTitulo(true);
  };

  return (
    <>
      <div className='tareas-lista-principal'>
        {editandoTitulo ? (
          <form onSubmit={handleTituloSubmit}>
            <input type="text" value={nuevoTitulo} onChange={handleTituloChange} />
            <button type="submit">Cambiar Título</button>
          </form>
        ) : (
          <>
          
            <h1>{titulo}</h1>
            <button id="editarTitulo" onClick={handleEditarTitulo}>Editar Título</button>
          </>
        )}
        <Listadetareas />
      </div>
    </>
  );
}

export default Tareaprincipal;
