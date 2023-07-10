
import React, { useState, useEffect } from "react";
import Listadetareas from "./ListaDeTareas";
import "../estilos/Tareaprincipal.css";

const titulos = "titulo";

function Tareaprincipal() {
  const [titulo, setTitulo] = useState("Titulo");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [editandoTitulo, setEditandoTitulo] = useState(false);

  useEffect(() => {
    titulosGuardados();
  }, []);

  const handleTituloChange = (event) => {
    let title = event.target.value;
    setNuevoTitulo(title);
  };

  const handleTituloSubmit = (e) => {
    e.preventDefault();
    if (nuevoTitulo !== "") {
      setTitulo(nuevoTitulo);

      localStorage.setItem(titulos, nuevoTitulo);
    }
    setEditandoTitulo(false);
  };

  const handleEditarTitulo = () => {
    setEditandoTitulo(true);
  };
  const titulosGuardados = () => {
    const tituloGuardado = localStorage.getItem(titulos);

    setTitulo(tituloGuardado);
  };

  return (
    <>
      <div className="tareas-lista-principal">
        {editandoTitulo ? (
          <form className="form-titulo" onSubmit={handleTituloSubmit}>
            <input
              className="input-titulo-editado"
              type="text"
              value={nuevoTitulo}
              onChange={handleTituloChange}
            />
            <button className="btn-cambiar-titulo" type="submit">
              Cambiar Título
            </button>
          </form>
        ) : (
          <>
            <div className="div-titulo">
              <h1 className="titulo-tarea">{titulo}</h1>
              <button
                className="btn-editar-titulo"
                id="editarTitulo"
                onClick={handleEditarTitulo}
              >
                Editar Título
              </button>
            </div>
          </>
        )}
        <Listadetareas />
      </div>
    </>
  );
}

export default Tareaprincipal;
