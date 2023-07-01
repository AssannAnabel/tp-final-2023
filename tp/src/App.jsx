import './App.css'
import {Routes,Route} from 'react-router-dom';
import { UserProvider } from './componentes/UserContext';
import Inicio from './componentes/Inicio';
import Contacto from './componentes/Contacto';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Nosotros from './componentes/Nosotros';




function App(){
    return(
        <>
        <UserProvider>
        <Routes>
        <Route exact path='/' element ={<Login />} />
        <Route exact path='/registro' element ={<Registro/>} />
        <Route exact path='/inicio' element={<Inicio/>}/>
        <Route exact path='/contacto' element ={<Contacto/>} />
        <Route exact path='/nosotros' element ={<Nosotros/>} />
        </Routes>
        </UserProvider>
        </>
    )
}
export default App