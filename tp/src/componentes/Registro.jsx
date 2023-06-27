import Header from './Header'


function Registro(){
    function addOneUser(user){
        const urlBase='https://647dd4d6af984710854a6fcc.mockapi.io/user-card';
        fetch(urlBase,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user),
        })
        .then((res)=>res.json())
        .then(data=>console.log(data))
        .catch(err=>postError.innerText=err);
        
    }

    function handleSubmit(e){
        e.preventDefault()

        let newUser={
            name:e.target.nombre.value,// trabajar con el Email
            password:e.target.password.value,
        }
            addOneUser(newUser)

            e.target.reset()
    }
   
    return(
        <>
     <Header/>
     
    <h2>Registrar Usuario</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' name='nombre' id='nombre'/>

        <label htmlFor='password'>Contraseña</label>
        <input type='password' name='password' id='password'/>
        
        <button type='submit'>Enviar</button>
    </form>
   
        </>
        
    )
}
export default Registro