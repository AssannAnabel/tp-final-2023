import Header from './Header';
import '../estilos/Nosotros.css';
import Footer from './Footer'


function Nosotros(){
    return(
        <>
        <Header/>
        <h2>Nosotros</h2>
        <div className='div-p-nosotros'>
        <p>Somos un grupo de estudiantes de Desarrollo Web Full stack.
        Nuestro objetivo fue crear con React una App administradora de tareas, que sea intuitiva y fácil de usar con el fin de organizar tus tareas diarias.
        El grupo esta conformado por: Fabricio Cordoba, Santiago Garda y Anabel Assann
         </p>
        </div>
        <Footer/>   
        </>
    )
}
export default Nosotros