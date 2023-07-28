import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from "./componentes/UserContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
</React.StrictMode>
)
//userProvide como un proveedro de contexto para envolver la aplicacion, para que los componentes hijos accedan al contexto
// configura y renderiza el componente principal