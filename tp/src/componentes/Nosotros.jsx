import Header from './Header';
import logoAct from '../imagenes/logoAct.png';

function Nosotros(){
    return(
        <>
        <Header/>
        <div className='app-logo-contenedor'>
        <img src={logoAct}
        className='app-logo' />
        </div>
        <h2>Nosotros</h2>
        <p>Somos un grupo de desarrollo medio pelo, remando en dulce de Leche</p>
        </>
    )
}
export default Nosotros