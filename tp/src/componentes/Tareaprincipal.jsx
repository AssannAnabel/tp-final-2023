
import React, { useState } from 'react';
import Listadetareas from './ListaDeTareas';
import '../estilos/Tareaprincipal.css'

function Tareaprincipal() {
  const [titulo, setTitulo] = useState('Titulo');
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
          <form className='form-titulo' onSubmit={handleTituloSubmit}>
            <input className='input-titulo-editado' type="text" value={nuevoTitulo} onChange={handleTituloChange} />
            <button className='btn-cambiar-titulo' type="submit">Cambiar Título</button>
          </form>
        ) : (
          <>
          <div className='div-titulo'>
            <h1 className='titulo-tarea'>{titulo}</h1>
            <button className='btn-editar-titulo' id="editarTitulo" onClick={handleEditarTitulo}>Editar Título</button>
            </div>
          </>
        )}
        <Listadetareas />
      </div>
    </>
  );
}

export default Tareaprincipal;
