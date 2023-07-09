import imagenLogo from '../imagenes/logov10.png';
import '../estilos/Imagen.css';

function Imagen(){
   
 
    return (


        <>
        <div>
            <img className='logo' src={imagenLogo} alt="logo Activity card" />
        </div>
        </>
    )
}

export default Imagen