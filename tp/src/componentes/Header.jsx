import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
        <header>
            <nav>
                <ul className='navUl'>
                    <li><Link to='/registro'>Registro</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/inicio'>Inicio</Link></li>
                    <li><Link to= '/nosotros'>Nosotros</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                    <input type="text" placeholder='buscar...'/> 
                </ul>
            </nav>
        </header>
        
        </>
    )
}
export default Header