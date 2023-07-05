import React from 'react';
import '../estilos/Tarea.css'
import {MdDelete} from "react-icons/md"; /* entre las llaves poner el nombre del icono que buscamos*/

function Tarea({id,texto, completada,completarTarea,eliminarTarea}){ //props true/false si es true se le asigna tarea-contenedor completa sino tarea-contenedor
    return(
        <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
            <div
             className='tarea-texto'
             onClick={()=>completarTarea(id)}>
             {texto} 
               </div>
               <div className='tarea-contenedor-iconos'
               onClick={()=>eliminarTarea(id)}>
               <MdDelete className='tarea-icono' />
               </div>
            </div>
        
    );
}
export default Tarea;