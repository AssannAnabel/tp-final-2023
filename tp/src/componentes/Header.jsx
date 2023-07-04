import {Link} from 'react-router-dom';
import '../estilos/Header.css';



function Header(){
    return(
        <>
        <header>
            <nav>
                <ul className='navUl'>
                <img src="src/imagenes/ImagenLogo.png" alt="logo" width="200px" height="200px"></img>
                <p>Tu Administrador de Tareas</p>
                    <li><Link to='/inicio'>Inicio</Link></li> 
                    <li><Link to= '/nosotros'>Nosotros</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                    <input id="buscar" type="text" placeholder='buscar...'/> 
                </ul>
            </nav>
        </header>
        
        </>
    )
}
export default Header