
import React, { useState, useEffect } from "react";
import Listadetareas from "./Listadetareas";
import "../estilos/Tareaprincipal.css";

const titulos = "titulo";

function Tareaprincipal() {
  const [titulo, setTitulo] = useState("Titulo");// almacena el titulo actual, estable "titulo"

  const [nuevoTitulo, setNuevoTitulo] = useState("");//nuevo titulo ingresado por el usuario, almacenado inicialmente como una cadena vacia

  const [editandoTitulo, setEditandoTitulo] = useState(false);//se utiliza para saber si el usuario esta editando el titulo, inicialmente comienza en false

  useEffect(() => {
    titulosGuardados();//llama a la función titulos guardados, para obtener el titulo almacenado, (localstorage) al cargar el componente por primera vez
  }, []);

  const handleTituloChange = (event) => {//maneja el cambio, en el campo de entrada del nuevo titulo
    let title = event.target.value;// se obtiene el valor ingresado y se actualiza el estado
    setNuevoTitulo(title);
  };

  const handleTituloSubmit = (e) => {//maneja el envio del formulario de cambio de titulo
    e.preventDefault();
    if (nuevoTitulo !== "") {// se verifica si el nuevo titulo no esta vacio, y se actualiza el estado del titulo con el nuevo titulo, se guarda en el almacenamiento
      setTitulo(nuevoTitulo);

      localStorage.setItem(titulos, nuevoTitulo);
    }
    setEditandoTitulo(false);// vuelve a false, para ver la visualizacion del cambio
  };

  const handleEditarTitulo = () => {
    setEditandoTitulo(true);//para activar modo edición
  };
  const titulosGuardados = () => {
    const tituloGuardado = localStorage.getItem(titulos);// obtiene el titulo del almacenamiento

    setTitulo(tituloGuardado);// se actualiza el estado con su valor
  };

  return (
    <>
      <div className="tareas-lista-principal">
        {editandoTitulo ? (// si es true renderiza el formulario
          <form className="form-titulo" onSubmit={handleTituloSubmit}>{/*maneja el envio del for, verifica que el titulo no este vacio */}
            <input
              className="input-titulo-editado"
              type="text"
              value={nuevoTitulo}
              onChange={handleTituloChange} /*maneja el cambio en el campo de entrada de nuevo titulo,se obtiene el valor y actualiza el estado */
            />
            <button className="btn-cambiar-titulo" type="submit"> 
              Cambiar Título
            </button>
          </form>
        ) : (
          <>
            <div className="div-titulo">{/* si es false,se muestra el titulo actual y el boton de editar titulo, que activa el modo edición */}
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
