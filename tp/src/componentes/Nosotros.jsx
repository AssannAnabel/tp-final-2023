import Header from './Header';
import '../estilos/Nosotros.css';
import '../imagenes/imagenLogo.png';

function Nosotros(){
    return(
        <>
        <Header/>
       
        <h2>Nosotros</h2>
        <div className='div-p-nosotros'>
        <p>Somos un grupo de estudiantes de Desarrollo Web Full stack, (cepit), donde nuestro propósito fue crear con React una App administradora de tareas, que sea intuitiva y fácil de usar con el fin de organizar tus tareas diarias.
            El grupo esta conformado por: Fabricio Cordoba, Santiago Garda y Anabel Assann
</p>
</div>
        </>
    )
}
export default Nosotros