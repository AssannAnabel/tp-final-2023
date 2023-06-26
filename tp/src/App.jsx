import './App.css'
import {Routes,Route} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import Contacto from './componentes/Contacto'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import Nosotros from './componentes/Nosotros'
import Listadetareas from './componentes/Listadetareas'



function App(){
    return(
        <>
        <Routes>
        <Route exact path='/inicio' element ={<Inicio/>} />
        <Route exact path='/registro' element ={<Registro/>} />
        <Route exact path='./listadetareas'element={<Listadetareas/>}/>
        <Route exact path='/login' element ={<Login/>} />
        <Route exact path='/contacto' element ={<Contacto/>} />
        <Route exact path='/nosotros' element ={<Nosotros/>} />
        </Routes>
        </>
    )
}
export default App