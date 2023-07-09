import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Contacto from "./componentes/Contacto";
import Inicio from "./componentes/Inicio";
import Login from "./componentes/Login";
import Nosotros from "./componentes/Nosotros";
import Registro from "./componentes/Registro";
import { UserContext} from "./componentes/UserContext";
import { useContext, useEffect } from "react";
import { RutasProtegidas } from "./componentes/RutasProtegidas";




function App() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(UserContext);
  
    useEffect(() => {
      if (isLoggedIn) navigate("/inicio");
    }, [isLoggedIn]);
  
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route element={<RutasProtegidas isAllowed={isLoggedIn} />}>
            <Route exact path="/inicio" element={<Inicio />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
          </Route>
        </Routes>
      </>
    );
  }
  
export default App