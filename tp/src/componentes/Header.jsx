import {Link} from 'react-router-dom';
import '../estilos/Header.css';



function Header(){
    return(
        <>
        <div className='navbar'>
        <header>
            <nav>
            <ul className='navUl'>
                        <li><Link className='enlace' to='/inicio'><img src="src/imagenes/ImagenLogo.png" alt="logo" width="200px" height="200px"></img></Link></li>
                        {/* <li><Link className='enlace' to='/inicio'>Inicio</Link></li> */}
                        <li><Link className='enlace' to='/nosotros'>Nosotros</Link></li>
                        <li><Link className='enlace' to='/contacto'>Contacto</Link></li>

                    </ul>
            </nav>
        </header>
        </div>
        </>
    )
}
export default Header