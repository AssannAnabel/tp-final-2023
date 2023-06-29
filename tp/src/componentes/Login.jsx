
import {useEffect,useRef,useState} from 'react';


function Login(props){
    console.log("texto",props)
    const inicialUrl='https://647dd4d6af984710854a6fcc.mockapi.io/user-card'
    const [user,setUser]=useState([]);
    const fetchUser=async (url)=>{
        try{
            const response=await fetch(url);
            const data=await response.json();
            setUser(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchUser(inicialUrl);
    },[]);
    const notificacionRef= useRef(null);
    function handleSubmit(e){
        e.preventDefault()

        let loginUser={
            email:e.target.email.value,
            password:e.target.password.value,
        }
        let userFound= user.find(user=>user.email===loginUser.email)
       
        if (userFound && userFound.password === loginUser.password) {
            window.location = '/inicio';
          } else {
            notificacionRef.current.style.color = 'red';
            notificacionRef.current.innerHTML = 'Usuario o contraseña incorrectos';
          }
            e.target.reset()// para limpiar
        }
        function handleSubmitRegis(e){
            e.preventDefault()

          window.location="/registro";
        }
   
    return(
        <>
       
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email'/>

            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' id='password'/>

            <p id='notificacion' ref={notificacionRef}></p>
            <button type='submit'>Iniciar Sesion </button>
           
        </form>
        <form onSubmit={handleSubmitRegis}>
        <button type='submit' >Registrarme </button>


        </form>
        
        
        </>
    )
}
export default Login