import Header from "./Header";

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
       <h3>Contacto</h3>
       <form onSubmit={handleSubmit} className='contactForm'>

         <label htmlFor='fullName'>Nombre Completo</label>
         <input type='text' name='fullName' id='fullName' required/>

         <label htmlFor='email'>Email</label>
         <input type='email' name='email' id='email' required/>

         <label htmlFor='reason'>Razon de Contacto</label>
         <select name='reason' id='reason'required>
            <option value='inconvenientes'>Inconvenientes</option>
            <option value='trabajo'>Trabajar con Nosotros</option>
            <option value='comentarios'>Comentarios</option>
         </select>

         <label htmlFor='mensaje'>Escriba su Mensaje</label>
         <textarea name='mensaje' id='mensaje' cols='30' rows='10'required></textarea>

         <button type='submit'>Enviar</button>
        </form>
        
        </>
    )
}
export default Contacto