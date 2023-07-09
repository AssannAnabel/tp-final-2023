import Header from './Header';
import'../estilos/Contacto.css';
import Footer from './Footer'

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
       
       <h2>Contacto</h2>
       <form onSubmit={handleSubmit} className='contactForm'>

         <label className='label-contacto' htmlFor='fullName'>Nombre Completo</label>
         <input className='input-contacto' type='text' name='fullName' id='fullName' required/>

         <label className='label-contacto' htmlFor='email'>Email</label>
         <input className='input-contacto' type='email' name='email' id='email' required/>

         <label className='label-contacto' htmlFor='reason'>Razon de Contacto</label>
         <select className='select-contacto' name='reason' id='reason'required>

            <option value='inconvenientes'>Inconvenientes</option>
            <option value='trabajo'>Trabajar con Nosotros</option>
            <option value='comentarios'>Comentarios</option>
         </select>

         <label className='label-contacto' htmlFor='mensaje'>Escriba su Mensaje</label>
         <textarea name='mensaje' id='mensaje' cols='30' rows='10'required></textarea>

         <button className='btn-enviar-contacto' type='submit'>Enviar</button>
        </form>
        <Footer />
        </>
    )
}
export default Contacto