import React from 'react';
import {AiOutlineCloseSquare} from "react-icons/ai"; /* entre las llaves poner el nombre del icono que buscamos*/

function Tarea({id,texto, completada,completarTarea,eliminarTarea}){ //props tru/false si es tru se le asigna tarea-contenedor completa sino tarea-contenedor
    return(
        <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
            <div
             className='tarea-texto'
             onClick={()=>completarTarea(id)}>
             {texto} 
               </div>
               <div className='tarea-contenedor-iconos'
               onClick={()=>eliminarTarea(id)}>
               <AiOutlineCloseSquare className='tarea-icono' />
               </div>
            </div>
        
    );
}
export default Tarea;