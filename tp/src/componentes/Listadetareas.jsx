import React, { useState, useEffect } from "react";
import "../estilos/listadetareas.css";
import Tarea from "./Tarea";
import Tareainput from "./Tareainput";
//lista de tareas maneja las funciones(agregar, eliminar, completar)
const TASK_KEY = "tasks";

function Listadetareas() {
  const [tareas, setTareas] = useState([]);
   /*almacena lista de tareas, Inicialmente tarea es un arreglo vacio, y se va a ir agregando cada tarea*/

  useEffect(() => {
    obtenerTareasGuardadas();//se llama a esta función para obtener las tareas almacenadas.
  }, []);//obtiene las tareas almacenadas en el localstorage, al cargar el componente por primera vez

  const agregarTarea = (tarea) => {//agrega una nueva tarea a la lista
    if (tarea.texto !== "") {
      // verificamos que la cadena no este vacia.
      tarea.texto = tarea.texto.trim(); // trim es un metodo que nos permite quitar los espacios del principio o del final de la cadena de texto
      const tareasActualizadas = [tarea, ...tareas]; // se crea un nuevo arreglo, tareas actualizadas,cuando agregamos tarea nueva, y con spread operator para concatenar la tarea nueva con el arreglo existente de tareas, las convertimos a objetos individuales del arreglo.
      setTareas(tareasActualizadas); //actualizamos el estado.

      localStorage.setItem(TASK_KEY, JSON.stringify(tareasActualizadas));//alamacenamos en el localStorage

      console.log("tarea agregada");
      console.log(tarea);
    }
  };

  const eliminarTarea = (id) => {//elimina
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);// se actualiza el estado y se guarda en localStorage
//filtra las tareas que no deben ser eliminadas
    localStorage.setItem(TASK_KEY, JSON.stringify(tareasActualizadas));
  };

  const completarTarea = (id) => {//se utiliza para marcar una tarea completada
    const tareasActualizadas = tareas.map((tarea) => { // se mapea el arreglo y se busca la tarea con el id especifico
      if (tarea.id == id) {
        tarea.completada = !tarea.completada;// se invierte el valor, si es true pasa a false, y si es false pasa a true
      }
      return tarea;//devuelve la tarea actualizada y se agrega al arreglo tareas actualizadas
    });
    setTareas(tareasActualizadas);//se actualiza el estado y se guarda en localStorage

    localStorage.setItem(TASK_KEY, JSON.stringify(tareasActualizadas));
  };

  const obtenerTareasGuardadas = () => {//obtiene las tareas almacenadas en el localS
    const tareasGuardadas = localStorage.getItem(TASK_KEY); // se obtiene el texto guardado
    let tareasGuardadasParseadas = JSON.parse(tareasGuardadas);// se parsea a objeto para poder iterar
    if (tareasGuardadasParseadas) {
      setTareas(tareasGuardadasParseadas);
    }
    return tareasGuardadasParseadas ? tareasGuardadasParseadas : [];//si no hay tareas almacenadas se devuleve un arreglo vacio
  };

  return (
    <>
      <Tareainput onSubmit={agregarTarea} /> 
    {/* form de entrada para agregar una nueva tarea, con onSubmit para manejar el envio*/ }
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (//para cada tarea se renderiza el componente tarea pasando todas las propiedades
          <Tarea
            key={tarea.id} //key no se pasa como un props,no podemos acceder a el, por eso repetimos abajo con id.
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea} //props y funciones de Tarea
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}
export default Listadetareas;
