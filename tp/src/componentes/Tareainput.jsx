import React,{useContext, useState} from 'react';
import '../estilos/Tareainput.css';
import{v4 as uuidv4} from 'uuid'; /*Importamos el paquete uuid para usar un id unico para las tarjetas */

function Tareainput(props){
    const [input, setInput] = useState(''); /*cadena de texto vacia, ya que inicialmente el usuario no puso ningun valor*/
    const manejarCambio = e =>{//mientras el usuario escribe en tiempo real
        setInput(e.target.value);
        //console.log(e.target.value);/*se va mostrando por consola cada letra que se va escribiendo */
       
    };
    const manejarEnvio = e =>{// evento diferente, envio de formulario.
        e.preventDefault();/*para que no se vuelva a cargar toda la aplicacion cuando se envia el formulario */
        console.log('enviando formulario');

        const tareaNueva ={
            id:uuidv4(), /* cada tarea va a tener un identificador unico, para poder mofificar, eliminar, actualizar */
            texto:input,
            completada:false,
           
        }
        //console.log(tareaNueva);// se ve el objeto con sus propiedaddes
        props.onSubmit(tareaNueva);
        e.target.reset()

    };
    return(
        <form className='tarea-inputs'
        onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar</button>
        </form>
    )
}
export default Tareainput;