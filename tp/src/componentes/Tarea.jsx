import React from 'react';
import '../estilos/Tarea.css'
import {MdDelete} from "react-icons/md"; /* entre las llaves poner el nombre del icono que buscamos*/

function Tarea({id,texto, completada,completarTarea,eliminarTarea}){ //props true/false si es true se le asigna tarea-contenedor completa sino tarea-contenedor
    return(// el componente funcional Tarea, representa una tarea en la lista,si la tarea esta completada se agrega la clase completada, y se tacha(estilos)
        <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
            <div
             className='tarea-texto'// contiene el texto de una tarea, cuando se hace click en el texto se llama a la función completar tarea, sino click en el icono y elima la tarea.
             onClick={()=>completarTarea(id)}> {/*cuando se hace click en el texto, se llama a la función completar tarea, y la marca como completada */}
             {texto} 
               </div>
               <div className='tarea-contenedor-iconos' /*tiene el icono para eliminar, cuando se hace click se elimina la tarea */
               onClick={()=>eliminarTarea(id)}>
               <MdDelete className='tarea-icono' />
               </div>
            </div>
        
    );
}
export default Tarea;