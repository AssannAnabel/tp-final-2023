import React,{useState} from "react";
import TareaInput from "./Tareainput";
import Tarea from "./Tarea";

function ListaDeTareas(){

    const[tareas,setTareas]= useState([]); /*Inicialmente tarea es un arreglo vacio, y se va a ir agregando cada tarea*/

    const agregarTarea = tarea=>{
        if(tarea.texto.trim()){// verificamos que la cadena no este vacia.
            tarea.texto = tarea.texto.trim();// trim es un metodo que nos permite quitar los espacios del principio o del final de la cadena de texto
            const tareasActualizadas =[tarea,...tareas];// cuando agregamos tarea nueva  va a ir en la primera linea, y con spread operator tomamos todas las anteriores, las convertimos a objetos individuales del arreglo.
            setTareas(tareasActualizadas);//actualizamos el estado.
        }
        console.log("tarea agregada");
        console.log(tarea);
    };
    const eliminarTarea = id =>{
        const tareasActualizadas=tareas.filter(tarea =>tarea.id !==id);
        setTareas(tareasActualizadas);
    };
     const completarTarea = id =>{
        const tareasActualizadas= tareas.map(tarea =>{
            if(tarea.id==id){
                tarea.completada =!tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
     };

    return(
    <>
    <TareaInput onSubmit={agregarTarea} />
    <div className='tareas-lista-contenedor'>
        {
            tareas.map((tarea) =>// un componente por cada arreglo de tarea
            <Tarea 
            key={tarea.id}//key no se pasa como un props,no podemos acceder a el, por eso repetimos abajo con id.
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea} //props y funciones de Tarea
            completarTarea={completarTarea}
            />

            )
        }
        </div>
    </>

    );
}
export default ListaDeTareas;