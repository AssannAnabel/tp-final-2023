import '../estilos/Header.css';
import Header from './Header';
import '../estilos/Registro.css';
import Footer from './Footer';


function Registro(){    
    function addOneUser(user){
        const inicialUrl='https://647dd4d6af984710854a6fcc.mockapi.io/user-card';
        fetch(inicialUrl,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user),
        })
        .then((res)=>res.json())
        .then(data=>console.log(data))
        .then(data => {
            window.location.href = '/';
          })

        .catch(err=>postError.innerText=err);
        
    }
    
    function handleSubmit(e){
        e.preventDefault()
    
        let newUser={
            name:e.target.nombre.value,// trabajar con el Email
            lastName:e.target.apellido.value,
            email:e.target.email.value,
            password:e.target.password.value,
        }
            addOneUser(newUser)
             
    }
    return(
        <>
        <Header/>
      <div className='div-registro'> 
    <h2>Registrar Usuario</h2>
    
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' name='nombre' id='nombre'/>

        <label htmlFor='apellido'>Apellido</label>
        <input type='text' name='apellido' id='apellido'/>

        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email'/>

        <label htmlFor='password'>Contraseña</label>
        <input type='password' name='password' id='password'/>
        
        <button className='btn-registrarme' type='submit'>Registrarme</button>
    </form>
    </div> 
    </div>
    <Footer/>
        </>
        
    )
}
export default Registro