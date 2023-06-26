import Header from './Header'
import {useEffect,useRef,useState} from 'react';


function Login(){
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
            name:e.target.nombre.value,
            password:e.target.password.value,
        }
        let userFound= user.find(user=>user.name===loginUser.name)/* esto conviene hacerlo con id*/ 
        if(userFound.password===loginUser.password){
            notificacionRef.current.style.color='green';
            notificacionRef.current.innerHTML='Usuario Logueado';

        }
        else{
            notificacionRef.current.style.color='red';
            notificacionRef.current.innerHTML='Usuario Incorrecto';
            }
            e.target.reset()// para limpiar
        }
   
    return(
        <>
        <Header/>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='nombre'>Nombre</label>
            <input type='text' name='nombre' id='nombre'/>

            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' id='password'/>

            <p id='notificacion' ref={notificacionRef}></p>
            <button type='submit'>Iniciar Sesion </button>
           
        </form>
        
        </>
    )
}
export default Login