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
