import Header from './Header';
import Imagen from './Imagen';
import'../estilos/Contacto.css';

function Contacto(){
    function handleSubmit(e){
        e.preventDefault()

        let contacto={
            nombreCompleto:e.target.fullName.value,
            email:e.target.email.value,
            motivo:e.target.reason.value,
            mensaje:e.target.mensaje.value,
        }
        e.target.reset()
        console.log(contacto)
    }
    return(
        <>
       <Header/>
       <Imagen/>
       <h2>Contacto</h2>
       <form onSubmit={handleSubmit} className='contactForm'>

         <label className='label-contacto' htmlFor='fullName'>Nombre Completo</label>
         <input type='text' name='fullName' id='fullName' required/>

         <label className='label-contacto' htmlFor='email'>Email</label>
         <input type='email' name='email' id='email' required/>

         <label className='label-contacto' htmlFor='reason'>Razon de Contacto</label>
         <select className='select-contacto' name='reason' id='reason'required>

            <option value='inconvenientes'>Inconvenientes</option>
            <option value='trabajo'>Trabajar con Nosotros</option>
            <option value='comentarios'>Comentarios</option>
         </select>

         <label className='label-contacto' htmlFor='mensaje'>Escriba su Mensaje</label>
         <textarea name='mensaje' id='mensaje' cols='30' rows='10'required></textarea>

         <button type='submit'>Enviar</button>
        </form>
        
        </>
    )
}
export default Contacto