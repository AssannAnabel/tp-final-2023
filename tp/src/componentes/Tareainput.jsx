import React,{useState} from 'react';
import '../estilos/Tareainput.css';
import{v4 as uuidv4} from 'uuid'; /*Importamos el paquete uuid para usar un id unico para las tarjetas */

function Tareainput(props){
    const [input, setInput] = useState(''); /*cadena de texto vacia, ya que inicialmente el usuario no puso ningun valor*/
    const manejarCambio = e =>{//mientras el usuario escribe en tiempo real
        setInput(e.target.value);//setea la variable input, actualizar su estado,e es el evento de cambio
        //console.log(e.target.value);/*se va mostrando por consola cada letra que se va escribiendo */
       //(e.target.value), se actualiza el estado de input con el valor actual del elemento, en el que se produjo el evento de cambio,Esto permite mantener el estado del input actualizado a medida que el usuario escribe en el campo de entrada.

       //una vez que el usuario escribe , esta función se ejecuta y actualiza el estado del input, con el valor ingresado por el usuario.
    };
    const manejarEnvio = e =>{// evento diferente, envio de formulario.
        e.preventDefault();/*para que no se vuelva a cargar toda la aplicacion cuando se envia el formulario */
        console.log('enviando formulario');
//cuando el usuario agrega y envia el formulario, se crea un objeto "tarea nueva", contiene el id, texto que viene del input, y completada en false
        const tareaNueva ={
            id:uuidv4(), /* cada tarea va a tener un identificador unico, para poder mofificar, eliminar, actualizar */
            texto:input,//texto ingresado por el usuario
            completada:false,
           
        }
        //console.log(tareaNueva);// se ve el objeto con sus propiedaddes
        props.onSubmit(tareaNueva);//pasa el objeto tarea nueva al componente padre
        e.target.reset() //una vez agregada se limpian los campos

    };
    return(
        <form className='tarea-inputs'onSubmit={manejarEnvio}>{/* para envio de form */}
                <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange={manejarCambio}//cuando esta funcion se ejecuta y actualiza el estado del input con lo que ingreso el usuario.
            />
            <button className='tarea-boton'>Agregar</button>
        </form>
    )
}
export default Tareainput;